const PopularCard = ({ item }) => {
  // console.log("item", item)
  let discountPercentence = 5;
  const discountedPrice = (
    item?.price -
    (item?.discountPercentence / 100) * item?.price
  ).toFixed(2);
  return (
    <div className="relative group">
      <div className="bg-white rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl">
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Image Container */}
        <div className="w-full h-48 mb-4">
          <img
            src={item?.image}
            alt={item?.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
              -{item?.discountPercentence}%
            </span>
            <span className="text-gray-400 text-sm line-through">
              ${item?.price.toFixed(2)}
            </span>
            <span className="text-red-500 font-bold">
              100 ${discountedPrice}
            </span>
          </div>
          <h3 className="font-bold text-lg">{item?.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
