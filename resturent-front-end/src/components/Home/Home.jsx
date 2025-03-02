  
import About from "../../Pages/Home/About/About";
import Banner from "../../Pages/Home/Banner/Banner";
import Instagram from "../../Pages/Home/Instagram/Instagram";
import MeetOurExperts from "../../Pages/Home/MeetTeam/MeetTeam";
import Category from "../../Pages/Home/Online/Category";
import PopularProducts from "../../Pages/Home/PopularProducts/PopularProducts";
import Testmonial from "../../Pages/Home/Testmonial/Testmonial";
 
 

const Home = () => {
  return (
     <div>
      <Banner></Banner>
       <Category></Category>
      <PopularProducts></PopularProducts>
       <MeetOurExperts></MeetOurExperts>
      <Instagram></Instagram>
       <About></About>
      <Testmonial></Testmonial>
     </div>
  );
};

export default Home;