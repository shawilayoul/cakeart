import { useParams } from "react-router-dom";
import { RecipesData} from "../../constants/data";

const HomeRecipeDetail = () => {
  const { id: recipeId } = useParams();
  const singleRecipe = RecipesData.filter(({ id }) => id ==recipeId);
  return <div>
    <div className="recipeImg">
      <img style={{width:"500px"}} src={singleRecipe[0].image} alt="" />
    </div>
  </div>;
};

export default HomeRecipeDetail;