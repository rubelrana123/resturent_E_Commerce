  
import About from "../../Pages/Home/About/About";
import Banner from "../../Pages/Home/Banner/Banner";
import MeetOurExperts from "../../Pages/Home/MeetTeam/MeetTeam";
import Category from "../../Pages/Home/Online/Category";
import PopularProducts from "../../Pages/Home/PopularProducts/PopularProducts";
 
 

const Home = () => {
  return (
     <div>
      <Banner></Banner>
       <Category></Category>
      <PopularProducts></PopularProducts>
       <MeetOurExperts></MeetOurExperts>
       <About></About>
     </div>
  );
};

export default Home;