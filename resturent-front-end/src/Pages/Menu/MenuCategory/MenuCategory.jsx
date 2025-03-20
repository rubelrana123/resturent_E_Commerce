import { Link } from "react-router-dom";

import Subtitle from "../../../components/Reuseable/Subtitle/Subtitle";
import MenuItem from "../../../components/Reuseable/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Subtitle Subtitle img={img} title={title}></Subtitle>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
