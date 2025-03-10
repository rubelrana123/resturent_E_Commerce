import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar.jsx";
import Footer from "../Pages/Shared/Footer/Footer";
 
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;