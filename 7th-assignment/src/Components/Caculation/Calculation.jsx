const Calculation = ({
  cookItems,
  cookingHandler,
  cooking,
  totalTime,
  totalKcal,
}) => {
  // console.log(cooking);

  return (
    <div>
      <div className="border-2 rounded-xl border-slate-200 p-3 ">
        <h3 className="font-semibold text-2xl py-3 ">
          Want to Cook :{' '}
          <span className="text-[#0BE58A] font-extrabold">
            {cookItems.length}
          </span>
        </h3>
        <hr />
        <table className="table-auto">
          <thead>
            <tr className="*:text-start *:py-3  ">
              <th className="lg:pr-3 ">SL.</th>
              <th className="lg:pr-16">Name</th>
              <th className="lg:pr-16">Time</th>
              <th className="">Calories</th>
            </tr>

            {cookItems.map((item, index) => (
              // <div className="*:py-3" key={index}>
              <tr
                className="lg:*:pr-6 *:text-start bg-[#2828280e] *:py-3 "
                key={index}
              >
                <td className="pl-2 *:text-[16px]">{index + 1}</td>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time} minutes</td>
                <td>{item.calories} Kcal</td>
                <td className="pt-3">
                  <button
                    onClick={() => cookingHandler(item.recipe_id)}
                    className="bg-[#0BE58A] rounded-3xl py-1 px-2 font-semibold"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
              // </div>
            ))}
          </thead>
        </table>
        <h3 className="font-semibold text-2xl py-3 ">
          Currently Cooking :{' '}
          <span className="text-[#0BE58A] font-extrabold">
            {cooking.length}
          </span>
        </h3>
        <hr />

        <table className="table-auto">
          <thead>
            <tr className="*:text-start *:py-3 ">
              <th className="lg:pr-3">SL.</th>
              <th className="lg:pr-16 ">Name</th>
              <th className="lg:pr-16">Time</th>
              <th>Calories</th>
            </tr>

            {cooking.map((item, index) => (
              <tr
                className="*:pr-6 *:text-start bg-[#2828280e] *:py-3 "
                key={index}
              >
                <td className="">{index + 1}</td>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time} minutes</td>
                <td>{item.calories} Kcal</td>
              </tr>
            ))}
          </thead>
        </table>
        <hr />
        <div className="flex justify-center gap-4 pl-12">
          <p>
            Total time= <br /> {totalTime} minutes
          </p>
          <p>
            Total Calories= <br /> {totalKcal} Kcal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
