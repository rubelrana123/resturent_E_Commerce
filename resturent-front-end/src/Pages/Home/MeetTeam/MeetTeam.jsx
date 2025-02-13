 
// Importing chef images
import chef1 from "../../../assets/meetOurExperts/chef1.png";
import chef2 from "../../../assets/meetOurExperts/chef2.png";
import chef3 from "../../../assets/meetOurExperts/chef3-1.png";
import { ChefCard } from "./ChefCard";

const chefs = [
  { name: "Thomas Walim", role: "Dessert specialist", image: chef1 },
  { name: "James Jhonson", role: "Chef Master", image: chef2 },
  { name: "Room Minal", role: "Dessert specialist", image: chef3 },
];


const MeetOurExperts = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
        Meet <span className="text-yellow-500">Our Experts</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-2 sm:px-4 md:px-8">
        {chefs.map((chef, index) => (
          <ChefCard key={index} chef={chef} />
        ))}
      </div>
    </section>
  );
};

export default MeetOurExperts;
