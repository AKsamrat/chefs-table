import Calculation from '../Caculation/Calculation';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
  return (
    <div className="mt-10 container mx-auto mt-8 px-4 lg:px-20">
      <h1 className="font-semibold text-[40px]">Our Recipes</h1>
      <p className="text-[16px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur
        elementum mauris aenean neque.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 col-span-3 gap-4">
          <Recipe></Recipe>
          <Recipe></Recipe>
        </div>
        <div className="col-span-2">
          <Calculation></Calculation>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
