import { useEffect, useState } from 'react';
import Calculation from '../Caculation/Calculation';
import Recipe from '../Recipe/Recipe';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cookItems, setCookItems] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch('rcipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const cookItemsHendeler = items => {
    const isExist = cookItems.find(c => c.recipe_id == items.recipe_id);
    if (isExist) {
      toast('This one already added!');
    } else {
      setCookItems([...cookItems, items]);
    }
  };

  const cookingHandler = id => {
    // console.log(id);
    const newItem = cookItems.filter(item => item.recipe_id != id);
    setCookItems(newItem);
    const newCook = cookItems.filter(item => item.recipe_id == id);
    setCooking([...cooking, ...newCook]);
  };
  const totalTime = cooking.reduce((p, c) => p + c.preparing_time, 0);
  const totalKcal = cooking.reduce((p, c) => p + c.calories, 0);

  return (
    <div className=" container mx-auto mt-8 px-4 lg:px-20">
      <h1 className="font-semibold text-[40px]">Our Recipes</h1>
      <p className="text-[16px] font-normal">
        Looking for a specific type of recipe? Here’s where you can find
        whatever you’re looking for! <br /> Select a category below to discover
        your favorite new meals.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 col-span-3 gap-4">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              cookItemsHendeler={cookItemsHendeler}
            ></Recipe>
          ))}
        </div>
        <div className=" col-span-3  lg:col-span-2 ">
          <Calculation
            cookItems={cookItems}
            cookingHandler={cookingHandler}
            cooking={cooking}
            totalTime={totalTime}
            totalKcal={totalKcal}
          ></Calculation>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipes;
