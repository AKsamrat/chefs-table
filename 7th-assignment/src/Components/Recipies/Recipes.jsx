import Recipe from '../Recipe/Recipe';

const Recipes = () => {
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-[40px]">Our Recipes</h1>
      <p className="text-[16px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur
        elementum mauris aenean neque.
      </p>
      <div>
        <Recipe></Recipe>
      </div>
      <div></div>
    </div>
  );
};

export default Recipes;
