 import bannerImage from "../../assets/shop/banner2.jpg"
import SectionBanner from "../../components/Reuseable/SectionBanner/SectionBanner";
import Subtitle from "../../components/Reuseable/Subtitle/Subtitle"
const OurShop = () => {
    return (
        <div>
            <SectionBanner title = "Our Shop"  subtitle = "lets start your favourite" bannerImage = {bannerImage} ></SectionBanner>
             <Subtitle heading ="our shop" subheading = "hello shop"></Subtitle>
        </div>
    );
};

export default OurShop;