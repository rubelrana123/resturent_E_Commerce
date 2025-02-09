import { Link } from "react-router-dom";
import bgImage from "../../../assets/bg_Footer.png";

const Footer = () => {
  return (
    <div className=" ">
    <footer className=" relative  text-black py-10">
      {/* Background Design */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${bgImage})`}} // Adjust image path
      ></div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 lg:px-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="bg-[#F3274C] text-white p-6 rounded-lg w-64 shadow-lg">
              <h2 className="text-xl font-bold">pizza hut</h2>
              <p className="mt-2 text-sm">Tuesday – Saturday: 12:00pm – 23:00pm</p>
              <p className="text-sm font-semibold underline mt-1">Closed on Sunday</p>
              <p className="text-sm mt-3">5-star rated on TripAdvisor</p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <ul className="space-y-2">
              <li><Link className="hover:underline">Freddo One</Link></li>
              <li><Link className="hover:underline">Special Dish</Link></li>
              <li><Link className="hover:underline">Reservation</Link></li>
              <li><Link className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Menu</h3>
            <ul className="space-y-2">
              <li><Link className="hover:underline">Steaks</Link></li>
              <li><Link className="hover:underline">Burgers</Link></li>
              <li><Link className="hover:underline">Cocktails</Link></li>
              <li><Link className="hover:underline">Bar BQ</Link></li>
              <li><Link className="hover:underline">Desserts</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <p className="text-sm mb-3">Get recent news and updates.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <button className="bg-[#F3274C] text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-1 bg-yellow-400 w-full my-6"></div>

        {/* Bottom Section */}
        <div className="flex justify-between text-sm">
          <p>© 2024 <span className="text-red-500 font-semibold">pizza hut</span> | All Rights Reserved</p>
          <div className="flex space-x-4">
            <Link className="hover:underline">Facebook</Link>
            <Link className="hover:underline">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
