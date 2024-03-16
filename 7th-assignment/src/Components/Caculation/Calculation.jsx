const Calculation = () => {
  return (
    <div>
      <div className="border-2 rounded-xl border-slate-200 p-3">
        <h3 className="font-semibold text-2xl py-3">Want to Cook:01</h3>
        <hr />
        <table className="table-auto">
          <tr className="*:text-start *:py-3">
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
          <tr className="*:pr-6 *:text-start bg-[#2828280e] ">
            <td className="py-3">Chicken Caesar Salad</td>
            <td className="py-3">20 minutes</td>
            <td className="py-3">400 calories</td>
            <div className=" pt-4">
              <button className="bg-[#0BE58A] rounded-3xl py-1 px-2 font-semibold">
                Preparing
              </button>
            </div>
          </tr>
        </table>
        <h3 className="font-semibold text-2xl py-3">Currently Cooking:01</h3>
        <hr />
        <table className="table-auto">
          <tr className="*:text-start *:py-3">
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
          <tr className="*:pr-6 *:text-start bg-[#2828280e] ">
            <td className="py-3">Chicken Caesar Salad</td>
            <td className="py-3">20 minutes</td>
            <td className="py-3">400 calories</td>
            <div className=" pt-4">
              <button className="bg-[#0BE58A] rounded-3xl py-1 px-2 font-semibold">
                Preparing
              </button>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculation;
