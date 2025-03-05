 

const SectionBanner = ({title, subtitle, bannerImage}) => {
    return (
        <div className="h-96 relative w-full bg-cover bg-center " 
        style={{backgroundImage: `url(${bannerImage})`}}
        
        >
        <div className="absolute inset-10     flex flex-col items-center  justify-center text-white p-6 ">
         <div className="text-center text-black  bg-inherit p-12  bg-white/30 backdrop-blur-none " >
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <h2 className="text-xl">{subtitle}</h2>
        </div>
      </div>
      </div>
    );
};

export default SectionBanner;