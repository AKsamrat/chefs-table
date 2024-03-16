const Nav = () => {
  return (
    <div className="container mx-auto mt-6 px-4 lg:px-20">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl lg:text-[32px]">Recipe Calories</h1>
        <div className="flex justify-between items-center gap-8 *:text-[#150b2b84] hidden lg:flex">
          <a href="">Home</a>
          <a href="">Recipes</a>
          <a href="">About</a>
          <a href="">Search</a>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-start bg-[#150b2b0b] rounded-3xl py-2 px-4 hidden lg:flex">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              className="bg-[#150b2b00]"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="bg-[#0BE58A] rounded-full p-2">
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
