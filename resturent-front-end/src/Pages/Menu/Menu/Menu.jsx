import { Helmet } from "react-helmet-async";
import UseMenu from "../../../hooks/Usemenu";
import PopularProducts from "../../Home/PopularProducts/PopularProducts";
import SectionBanner from "../../../components/Reuseable/SectionBanner/SectionBanner";
import bannerImage from "../../../assets/shop/banner2.jpg"
import MenuItem from "../../../components/Reuseable/MenuItem/MenuItem";
import MenuCategory from "../MenuCategory/MenuCategory";
 
 
const Menu = () => {

  const [menu] = UseMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
    <SectionBanner title = "Our Menu" subtitle="would you like to try a menu" bannerImage={bannerImage}></SectionBanner>
    <PopularProducts item = {desserts}></PopularProducts>
    <MenuCategory items={desserts} title="Desserts" img={bannerImage}></MenuCategory>
  
     {/* <MenuItem item = {desserts}></MenuItem> */}
    {/* <SectionBanner title = "Our Menu" subtitle="would you like to try a menu" bannerImage={bannerImage}></SectionBanner>
    <SectionBanner title = "Our Menu" subtitle="would you like to try a menu" bannerImage={bannerImage}></SectionBanner>
    <PopularProducts></PopularProducts>
    <SectionBanner title = "Our Menu" subtitle="would you like to try a menu" bannerImage={bannerImage}></SectionBanner>
    <PopularProducts></PopularProducts> */}
    </div>
  );
};

export default Menu;