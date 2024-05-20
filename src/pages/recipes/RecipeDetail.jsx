import { useParams } from "react-router-dom";
import { RecipesData } from "../../constants/data";
import images from "../../assets/images";
import "./recipes.scss";

const RecipeDetail = () => {
  const { id: recipeId } = useParams();
  const singleRecipe = RecipesData.filter(({ id }) => id == recipeId);
  return (
    <div className="recipeContainer">
      <section className="recipeTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Recipes Details</h2>
        </div>
      </section>
      <div className="recipeImg">
        <img style={{ width: "500px" }} src={singleRecipe[0].image} alt="" />
      </div>
    </div>
  );
};

export default RecipeDetail;
