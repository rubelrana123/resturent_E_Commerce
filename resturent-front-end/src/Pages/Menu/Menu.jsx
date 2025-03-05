 import { Helmet } from "react-helmet-async";
import "./Menu.css"
import PopularProducts from "../Home/PopularProducts/PopularProducts";
import SectionBanner from "../../components/Reuseable/SectionBanner/SectionBanner";
import bannerImage from "../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
    <SectionBanner title = "Our Menu" subtitle="would you like to try a menu" bannerImage={bannerImage}></SectionBanner>
    <PopularProducts></PopularProducts>
    </div>
  );
};

export default Menu;