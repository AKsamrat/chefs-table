const Recipe = () => {
  return (
    <div>
      <img src="" alt="" />
      <h3 className="font-semibolt text-[20px] text-[#282828]">
        Spaghetti Bolognese
      </h3>
      <p className="text-[16px] font-normal text-[#878787]">
        Classic Italian pasta dish with savory meat sauce.
      </p>
      <hr />
      <h3 className="font-semibolt text-[18px] text-[#282828]">
        Ingredients: 6
      </h3>
      <ol className="*:decoration-dotted">
        <li>500g ground beef</li>
        <li>1 onion, chopped</li>
        <li>2 cloves garlic, minced</li>
      </ol>
    </div>
  );
};

export default Recipe;
