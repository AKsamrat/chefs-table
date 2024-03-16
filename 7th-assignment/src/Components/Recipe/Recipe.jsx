import img1 from '../../assets/Spaghetti.png';

const Recipe = () => {
  return (
    <div>
      <div className="border-2 border-slate-200 rounded-xl p-4">
        <img src={img1} alt="" />
        <h3 className="font-semibolt text-[20px] text-[#282828] pt-3">
          Spaghetti Bolognese
        </h3>
        <p className="text-[16px] font-normal text-[#878787] py-3">
          Classic Italian pasta dish with savory meat sauce.
        </p>
        <hr />
        <h3 className="font-semibolt text-[18px] text-[#282828]">
          Ingredients: 6
        </h3>
        <ol className="*:text-[#878787] text-[18px] py-3">
          <li>500g ground beef</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
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
            <p>30 minuite</p>
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
            <p>600 calories</p>
          </div>
        </div>
        <button className="bg-[#0BE58A] rounded-3xl py-3 px-4 font-semibold">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default Recipe;
