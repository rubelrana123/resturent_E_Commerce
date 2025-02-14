  
import About from "../../Pages/Home/About/About";
import Banner from "../../Pages/Home/Banner/Banner";
import MeetOurExperts from "../../Pages/Home/MeetTeam/MeetTeam";
import Category from "../../Pages/Home/Online/Category";
 
 

const Home = () => {
  return (
     <div>
      <Banner></Banner>
       <Category></Category>
       <MeetOurExperts></MeetOurExperts>
       <About></About>
     </div>
  );
};

export default Home;