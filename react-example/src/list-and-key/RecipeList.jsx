/* eslint-disable react/prop-types */
const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: ["pizza crust", "pizza sauce", "mozzarella", "ham", "pineapple"],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

// eslint-disable-next-line no-unused-vars
const Recipe = ({id, name, ingredients}) => {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient => 
                    <li key={ingredient}>{ingredient}</li>
                )}
            </ul>
        </div>
    )
}

const RecipeList = () => {
  return (
    <>
      <h1>Recipe</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </>
  );
};

export default RecipeList;
