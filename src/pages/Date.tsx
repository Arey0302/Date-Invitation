import { useState } from "react";
import CardComponent from "../components/Card/Card";
import Layout from "../layouts/layout";
import food1 from "../assets/img/food/food1.jpg";
import food2 from "../assets/img/food/food2.jpg";
import food3 from "../assets/img/food/food3.jpg";
import food4 from "../assets/img/food/food4.jpg";
import food5 from "../assets/img/food/food5.jpg";
import food6 from "../assets/img/food/food6.jpg";

import img1 from "../assets/img/cat-jump.gif";
import HeartButton from "../components/HeartButton/HeartButton";
import { pink } from "../components/interfaces/HeartButton.interface";
import HeartSlider from "../components/Heart/Heart";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Date = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [selectedCategory] = useState<string | null>(
    "food"
  );
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(
        selectedCards.filter((cardIndex) => cardIndex !== index)
      );
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const getTitle = () => {
    switch (selectedCategory) {
      case "food":
        return "What do you want to eat ?";
      default:
    }
  };

  const nextQuestion = async () => {

    const savedDateTime = localStorage.getItem("dateTime");
  
    if (selectedCards.length > 0 && savedDateTime) {
      const parsedDateTime = JSON.parse(savedDateTime); 
  
      const selectedFoods = selectedCards
        .map(index => foodData[index].title) 
        .join(", ");
  
      try {
        await fetch("http://localhost:5000/save-date-time", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: parsedDateTime.date,
            time: parsedDateTime.time,
            food: selectedFoods, 
          }),
        });
  
        navigate("/thankyou");
      } catch (error) {
        console.error("Error saving date and time:", error);
        toast.error("Error saving data. Please try again later.");
      }
    } else {
      toast.error("Please seclect at least one food.");
    }
  };
  

  const foodData = [
    {
      title: "Pancake",
      image: food1,
    },
    {
      title: "Manwah",
      image: food2,
    },
    {
      title: "BBQ",
      image: food3,
    },
    {
      title: "Panda",
      image: food4,
    },
    {
      title: "Snail",
      image: food5,
    },
    {
      title: "Pizza",
      image: food6,
    },
  ];


  return (
    <Layout>
      <h1 style={{ color: pink }}>{getTitle()}</h1>
      <main className="d-flex flex-wrap justify-content-center mt-3">
        {selectedCategory === "food" &&
          foodData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
       
        {selectedCategory === "rate" && (
          <>
            <div className="d-flex flex-column justify-content-center">
              <img
                className="m-auto"
                src={img1}
                alt="Image 1"
                style={{
                  width: "300px",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <h1 style={{ color: pink }} className="py-3">
                Rate how exited are you
              </h1>
            </div>
            <HeartSlider></HeartSlider>
          </>
        )}
      </main>
      <HeartButton
        style={{
          width: "100%",
          maxWidth: "300px",
          margin: "0 auto",
          marginTop: "2rem",
        }}
        text="Continue ⊂(・ヮ・⊂)"
        onClick={nextQuestion}
      />
    </Layout>
  );
};

export default Date;
