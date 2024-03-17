import App from './../../App';
import img1 from '../../assets/Rectangle.png';
const Banner = () => {
  return (
    <div className="container mx-auto mt-8 px-4 lg:px-20 ">
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1))] w-full bg-no-repeat bg-cover rounded-[32px] bg-img h-[100vh] lg:h-[80vh] ">
        <h1 className="text-2xl lg:text-[52px] font-bold text-center text-white pt-3  lg:pt-24 leading-snug ">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="text-[16px] lg:text-[18px] font-normal text-white py-5">
          If you want to learn how to cook, start here. Tips for practicing
          techniques, conversion <br /> tables, and how to take the next steps
          beyond beginner.
        </p>
        <div className="flex justify-center gap-6 mt-10">
          <button className="bg-[#0BE58A] rounded-3xl py-3 px-4 font-semibold hover:bg-green-400 hover:scale-110">
            Explore Now
          </button>
          <button className=" rounded-3xl py-3 px-4 font-semibold text-white border-2 hover:scale-110 ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
