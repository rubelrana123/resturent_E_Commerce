// PopularProducts.jsx
import Subtitle from "../../../components/Reuseable/Subtitle/Subtitle";
import foodImg1 from "../../../assets/popular/pizza-3.png";
import foodImg2 from "../../../assets/popular/beef-ruti.png";
import foodImg3 from "../../../assets/popular/burger-2-1.png";
import foodImg4 from "../../../assets/popular/delicious-burger.png";
import foodImg5 from "../../../assets/popular/grilled-2.png";
import foodImg6 from "../../../assets/popular/main-food.png";
import foodImg7 from "../../../assets/popular/pasta-2.png";
import PopularCard from "./PopularCard";
import { useEffect, useState } from "react";
const popularFoods = [
  {
    id: 1,
    name: "Delicious Burger",
    img: foodImg4,
    oldPrice: 60,
    discountPercentence: 25,
  },
  {
    id: 2,
    name: "Grilled Chicken",
    img: foodImg5,
    oldPrice: 42,
    discountPercentence: 7,
  },
  {
    id: 3,
    name: "Ruti With Chicken",
    img: foodImg2,
    oldPrice: 29,
    discountPercentence: 10,
  },
  {
    id: 4,
    name: "Fast Food Combo",
    img: foodImg3,
    oldPrice: 30,
    discountPercentence: 13,
  },
  {
    id: 5,
    name: "Chicago Deep Pizza",
    img: foodImg1,
    oldPrice: 28,
    discountPercentence: 27,
  },
  {
    id: 6,
    name: "Chinese Pasta",
    img: foodImg7,
    oldPrice: 40,
    discountPercentence: 15,
  },
  {
    id: 7,
    name: "Whopper Burger King",
    img: foodImg6,
    oldPrice: 30,
    discountPercentence: 13,
  },
  {
    id: 8,
    name: "Ruti With Beef Slice",
    img: foodImg2,
    oldPrice: 33,
    discountPercentence: 7,
  },
];

const PopularProducts = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(popularFoods)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      }, []);
  });
  return (
    <>
      <Subtitle
        heading="Crispy, Every Bite Tastes"
        subheading="Popular Fast Foods"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularFoods.map((item) => (
            <PopularCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
