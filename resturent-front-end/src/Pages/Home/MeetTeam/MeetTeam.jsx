 
// Importing chef images
import chef1 from "../../../assets/meetOurExperts/chef1.png";
import chef2 from "../../../assets/meetOurExperts/chef2.png";
import chef3 from "../../../assets/meetOurExperts/chef3-1.png";

const chefs = [
  { name: "Thomas Walim", role: "Dessert specialist", image: chef1 },
  { name: "James Jhonson", role: "Chef Master", image: chef2 },
  { name: "Room Minal", role: "Dessert specialist", image: chef3 },
];

const ChefCard = ({ chef }) => {
  return (
    <div className="text-center relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
      <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto">
        <img
          src={chef?.image}
          alt={chef?.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-md p-4 rounded-full text-center w-40 sm:w-44 md:w-48 lg:w-52">
        <p className="text-xs sm:text-sm md:text-base text-red-500 font-semibold">{chef?.role}</p>
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800">{chef?.name}</h3>
        <div className="flex justify-center gap-2 mt-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
        </div>
        <p className="mt-2 font-signature text-gray-600">Vann Hon</p>
      </div>
    </div>
  );
};

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
