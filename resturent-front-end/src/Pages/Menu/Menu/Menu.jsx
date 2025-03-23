import { Helmet } from "react-helmet-async";
import UseMenu from "../../../hooks/Usemenu";
import PopularProducts from "../../Home/PopularProducts/PopularProducts";
import SectionBanner from "../../../components/Reuseable/SectionBanner/SectionBanner";
import bannerImage from "../../../assets/shop/banner2.jpg";
import MenuItem from "../../../components/Reuseable/MenuItem/MenuItem";
import MenuCategory from "../MenuCategory/MenuCategory";
import PopularCard from "../../Home/PopularProducts/PopularCard";

const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* our menu  */}
      <SectionBanner
        title="Our Menu"
        subtitle="would you like to try a menu"
        bannerImage={bannerImage}
      ></SectionBanner>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {desserts.map((item, idx) => (
          <PopularCard menuOrder={true} key={idx} item={item} />
        ))}
      </div>
      <SectionBanner
        title="Our Menu"
        subtitle="would you like to try a menu"
        bannerImage={bannerImage}
      ></SectionBanner>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {soup.map((item, idx) => (
          <PopularCard menuOrder={true} key={idx} item={item} />
        ))}
      </div>
      <SectionBanner
        title="Our Menu"
        subtitle="would you like to try a menu"
        bannerImage={bannerImage}
      ></SectionBanner>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {salad.map((item, idx) => (
          <PopularCard menuOrder={true} key={idx} item={item} />
        ))}
      </div>
      <SectionBanner
        title="Our Menu"
        subtitle="would you like to try a menu"
        bannerImage={bannerImage}
      ></SectionBanner>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {offered.map((item, idx) => (
          <PopularCard menuOrder={true} key={idx} item={item} />
        ))}
      </div>
      <SectionBanner
        title="Our Menu"
        subtitle="would you like to try a menu"
        bannerImage={bannerImage}
      ></SectionBanner>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {pizza.map((item, idx) => (
          <PopularCard menuOrder={true} key={idx} item={item} />
        ))}
      </div>
      {/* // */}

      {/* <MenuCategory items={desserts} title="Desserts" img={bannerImage}></MenuCategory> */}
    </div>
  );
};

export default Menu;
