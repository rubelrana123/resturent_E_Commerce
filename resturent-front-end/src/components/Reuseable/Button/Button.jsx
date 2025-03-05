 

const Button = ({text}) => {
    return (
        <div>
              <button className="btn w-52 h-16 text-[17px] text-white bg-[#F3274C] hover:bg-[#D9203B] px-6 py-3  rounded-md">
               {text}
             </button>
        </div>
    );
};

export default Button;