

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import caroselImg1 from "../../../assets/home/04.jpg";
import caroselImg2 from "../../../assets/home/03.png";
import caroselImg3 from "../../../assets/home/02.jpg";

import caroselImg4 from "../../../assets/home/01.jpg";
import caroselImg5 from "../../../assets/home/06.png";
import caroselImg6 from "../../../assets/home/05.png";

const Banner = () => {
    return (
        <div>
        <Carousel   
        
        showArrows={true}  
        transitionTime={1000}
        thumbWidth={100}
        centerSlidePercentage={true} 
        showStatus={false}  
        infiniteLoop={true} 
        autoPlay={true} 
        interval={3000}  
        showThumbs={true} 
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