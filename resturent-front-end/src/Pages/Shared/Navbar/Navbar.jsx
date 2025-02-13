import { Link } from 'react-router-dom';
import logo from '../../../assets/pizza hut (1).png';
import shopLogo from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import profileImage from "../../../assets/others/profile.png";

const Navbar = () => {
  return (
    <nav className="navbar fixed bg-black/50 z-100 text-black   shadow-md px-6">
      {/* Left Section (Logo) */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
            <li>
              <Link to="/menu" className="hover:text-yellow-500">Our Menu</Link>
              <ul className="p-2">
                <li><Link to="/menu/pizza">Pizza</Link></li>
                <li><Link to="/menu/burger">Burger</Link></li>
              </ul>
            </li>
            <li><Link to="/dashboard" className="hover:text-yellow-500">Dashboard</Link></li>
          </ul>
        </div>
        <img src={logo} alt="Bistro Boss Logo" className="h-10" />
      </div>

      {/* Center Section (Nav Links) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 text-lg">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/contact" className="hover:text-yellow-500">Contact Us</Link>
          <Link to="/dashboard" className="hover:text-yellow-500">Dashboard</Link>
          <Link to="/menu" className="hover:text-yellow-500 font-bold text-yellow-400">Our Menu</Link>
        </ul>
      </div>

      {/* Right Section (Shop & Profile) */}
      <div className="navbar-end flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Link to="/shop" className="hover:text-yellow-500 flex items-center">
            <span>Our Shop</span>
            <img src={shopLogo} alt="Shop Cart" className="h-8 ml-1" />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Link to="/signout" className="hover:text-yellow-500 flex items-center">
            <span>Sign Out</span>
            <img src={profileImage} alt="Profile" className="h-8 ml-1 rounded-full" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
