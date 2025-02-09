 import fastFood from "../../../assets/fastfood.jpg";
 import qualityLogo from "../../../assets/icon/qualityIcon.png";
 import reputeLogo from "../../../assets/icon/reputaioonIcon.png";
 const About = () => {
   return (
     <section className="bg-base-200 min-h-screen flex items-center">
       <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
       
 
         {/* left Side: Text & Content (60%) */}
         <div className="md:w-3/5 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
           <p className="text-[17px] text-[#F3274C] font-bold uppercase">
             About Our Food
           </p>
           <h2 className="lg:text-5xl md:text-4xl font-bold leading-tight w-4/5">
             Where Quality Meets Excellent <span className="text-[#F3274C]"> Service</span>.
           </h2>
           <p className="py-6 text-gray-600">
           It&apos;s the perfect dining experience where every dish is crafted with fresh, 
             high-quality ingredients. Enjoy quick and efficient service that ensures your 
             food is served fresh and delicious.
           </p>
 
           {/* Quality & Reputation Section */}
           <div className="flex justify-between   ">
            {/* //quality */}
             <div className="flex justify-between space-x-3.5  ">
                <div id="image" className="grid place-items-center " >
                <img src={qualityLogo} className="" alt="qualityLogo"/>
                </div>
                <div>
                    <h1 className="text-[20px] font-semibold">Super Quality</h1>
                    <p className="text-[17px] leading-4">A team of dreamers and doers building
                    unique interactive music and art</p>
                </div>

             </div>
             {/* //reputaiom */}
             <div className="flex justify-between space-x-3.5  ">
                <div id="image" className="grid place-items-center " >
                <img src={reputeLogo} className="h-[50px] w-[52px]" alt="reputatoinLogo"/>
                </div>
                <div>
                    <h1 className="text-[20px] font-semibold">Super Quality</h1>
                    <p className="text-[17px] leading-4">A team of dreamers and doers building
                    unique interactive music and art</p>
                </div>

             </div>
           </div>
 
           {/* Button & Extra Info */}
           <div className="flex flex-col md:flex-row items-center md:justify-between mt-6 space-y-4 md:space-y-0">
             <button className="btn text-white bg-[#F3274C] hover:bg-[#D9203B] px-6 py-3 rounded-md">
               More About Us
             </button>
             <div className="text-center md:text-left">
               <h3 className="text-lg font-bold text-gray-800">Hello World</h3>
               <p className="text-gray-600">
                 CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.
               </p>
             </div>
           </div>
 
         </div>

           
         {/* right Side: Image (40%) */}
         <div className="md:w-2/5 flex justify-center ">
           <img
             src={fastFood}
             alt="Fast Food"
             className="w-full max-w-[400px] md:max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
           />
         </div>
 
       </div>
     </section>
   );
 };
 
 export default About;
 