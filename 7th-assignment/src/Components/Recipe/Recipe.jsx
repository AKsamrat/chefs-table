import img1 from '../../assets/Spaghetti.png';

const Recipe = ({ recipe, cookItemsHendeler }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    preparing_time,
    calories,
    recipe_img,
    ingredients,
  } = recipe;

  // console.log(recipe_name);

  return (
    <div className=" container mx-auto  ">
      <div className="border-2 border-slate-200 rounded-xl p-4 h-full">
        <img className="h-80 w-96 rounded-xl" src={recipe_img} alt="" />
        <h3 className="font-semibolt text-[20px] text-[#282828] pt-3 text-start">
          {recipe_name}
        </h3>
        <p className="text-[16px] font-normal text-[#878787] py-3 text-start">
          {short_description}
        </p>
        <hr />
        <h3 className="font-semibolt text-[18px] text-[#282828] text-start">
          Ingredients: {ingredients.length}
        </h3>
        <ol className="*:text-[#878787] text-[18px] py-3 text-start list-disc pl-5">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ol>
        <hr />
        <div className="flex justify-start gap-5 py-4">
          <div className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>{preparing_time}</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
            <p>{calories} </p>
          </div>
        </div>
        <button
          onClick={() => cookItemsHendeler(recipe)}
          className="bg-[#0BE58A] rounded-3xl py-3 px-4 font-semibold hover:scale-110"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default Recipe;
