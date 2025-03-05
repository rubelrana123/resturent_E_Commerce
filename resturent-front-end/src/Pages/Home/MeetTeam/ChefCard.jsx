import PropTypes from "prop-types";
export    const ChefCard = ( {chef} ) => {
    console.log(chef)
    return (
      <div className="text-center relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
        <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto">
          <img
            src={chef?.image}
            alt={chef?.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-md  py-3.5 rounded-[100%] text-center w-40 sm:w-44 md:w-48 lg:w-52">
          <p className="text-xs sm:text-sm md:text-base text-red-500 font-semibold">{chef?.role}</p>
          <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800">{chef?.name}</h3>
          <div className="flex justify-center gap-2 mt-2 ">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full "></span>
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
          </div>
          <p className="mt-2 font-signature text-gray-600">Vann Hon</p>
        </div>
      </div>
    );
  };

   
  // Add prop validation
  //install npm install prop-types

ChefCard.propTypes = {
    chef: PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };
  