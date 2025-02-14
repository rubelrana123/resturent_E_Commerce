
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import caroselImg1 from "../../../assets/home/04.jpg";
import caroselImg2 from "../../../assets/home/03.png";
import caroselImg3 from "../../../assets/home/02.jpg";

import caroselImg4 from "../../../assets/home/01.jpg";
import caroselImg5 from "../../../assets/home/06.png";
import caroselImg6 from "../../../assets/home/05.png";
import './Banner.css'
const Banner = () => {
    return (
       <div className=''>
         <Carousel 
         autoPlay={true}
         infiniteLoop={true}
         showStatus = {false}
         >
            <div>
                <img src={caroselImg1} />
            </div>
            <div>
                <img src={caroselImg2} />
            </div>
            <div>
                <img src={caroselImg3} />
            </div>
            <div>
                <img src={caroselImg4} />
            </div>
            <div>
                <img src={caroselImg5} />
            </div>
            <div>
                <img src={caroselImg6} />
            </div>
        </Carousel>
       </div>
    );
};

export default Banner;