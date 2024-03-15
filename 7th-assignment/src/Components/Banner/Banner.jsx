import App from './../../App';
import img1 from '../../assets/Rectangle.png';
const Banner = () => {
  return (
    <div className="container mx-auto mt-8 px-4 lg:px-20 ">
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1))] w-full bg-no-repeat bg-cover rounded-[32px] bg-img h-[80vh]">
        <h1 className="text-[52px] font-bold text-center text-white lg:pt-24">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="text-[18px] font-normal text-white py-5">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br /> problems to become an
          exceptionally well world-class Programmer.
        </p>
        <div className="flex justify-center gap-6 mt-10">
          <button className="bg-[#0BE58A] rounded-3xl py-3 px-4 font-semibold">
            Explore Now
          </button>
          <button className=" rounded-3xl py-3 px-4 font-semibold text-white border-2 ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
