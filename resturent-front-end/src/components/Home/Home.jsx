  
import About from "../../Pages/Home/About/About";
import Banner from "../../Pages/Home/Banner/Banner";
import MeetOurExperts from "../../Pages/Home/MeetTeam/MeetTeam";
 

const Home = () => {
  return (
     <div>
      <Banner></Banner>
       <MeetOurExperts></MeetOurExperts>
       <About></About>
     </div>
  );
};

export default Home;