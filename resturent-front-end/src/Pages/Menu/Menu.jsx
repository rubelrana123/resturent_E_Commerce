 import "./Menu.css"
const Menu = () => {
  return (
    <div className="h-96 relative w-full bg-cover bg-center menuBanner" 
    
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
        <div className="text-center text-black" >
          <h1 className="text-4xl font-bold mb-2">OUR SHOP</h1>
          <h2 className="text-xl">WOULD YOU LIKE TO TRY A DISH?</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;