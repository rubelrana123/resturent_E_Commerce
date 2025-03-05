 import bannerImage from "../../assets/shop/banner2.jpg"
import SectionBanner from "../../components/Reuseable/SectionBanner/SectionBanner";

const OurShop = () => {
    return (
        <div>
            <SectionBanner title = "Our Shop"  subTitle = "lets start your favourite" bannerImage = {bannerImage} ></SectionBanner>
        </div>
    );
};

export default OurShop;