import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Container from "../../Shared/Container/Container";
import Subtitle from "../../../components/Reuseable/Subtitle/Subtitle";

// Import images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Container>
      <Subtitle
        heading="---From 11:00 am to 10:00 pm---"
        subheading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        loop={true} // ✅ Makes it infinite
        speed={5000} // ✅ Slow and smooth transition (adjust as needed)
        autoplay={{
          delay: 200, //  
          disableOnInteraction: false, 
        }}
        freeMode={false} // ✅ Removes snapping for smooth movement
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-24"
      >
        {[slide1, slide2, slide3, slide4, slide5].map((slide, index) => (
          <SwiperSlide
            key={index}
            className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={(swiper) => swiper.autoplay.stop()} // ✅ Stop autoplay when clicked
          >
            <img src={slide} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              {["Salads", "Pizzas", "Soups", "Desserts", "Salads"][index]}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Category;
