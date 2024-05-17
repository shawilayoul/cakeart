import images from "../../assets/images";
import "./recipes.scss";
import { FaRegStar } from "react-icons/fa";
import { RecipesData } from "../../constants/data";
const Recipes = () => {
  return (
    <div className="recipeContainer">
      <section className="recipeTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Recipes</h2>
        </div>
      </section>
      <section className="recipeSearch">
        <div className="searchElement">
          <div className="searchOption">
            <select name="" id="">
              <option value="">Recipe Category</option>
              <option value="">Chocolate</option>
              <option value="">Cupcake</option>
              <option value="">Pizzas</option>
            </select>
          </div>
          <div className="searchInpt">
            <input type="text" placeholder="Input ingredient here" />
          </div>
        </div>
        <div className="searchElement">
          <div className="searchOption">
            <select name="" id="">
              <option value="">Recipe Cuisine</option>
              <option value="">French Cuisine</option>
              <option value="">Indian Cuisine</option>
              <option value="">Italian Cuisine</option>
              <option value="">Spanish Cuisine</option>
              <option value="">VietNam Cuisine</option>
            </select>
          </div>
          <div className="searchInpt">
            <input type="text" placeholder="Input Keyword here" />
          </div>
        </div>
        <div className="searchElement">
          <div className="searchOption">
            <select name="" id="">
              <option value="">Sort Recipe</option>
              <option value="">Title(ascending)</option>
              <option value="">Title (descending) </option>
              <option value="">Date(newest first)</option>
              <option value="">Date(oldest first)</option>
            </select>
          </div>
          <div className="btnSearch">
            <button>Search For Recipes</button>
          </div>
        </div>
      </section>
      <section className="allRecipes">
        <div className="title">
          <h2>All Recipes</h2>
        </div>
        <div className="recipesCat">
          <p>All</p>
          <p>Chocalate</p>
          <p>Cupcake</p>
          <p>Pizzas</p>
        </div>
        <div className="RecipeItemsContainer">
          {
            RecipesData.map(({ id, image, title, chesf, time }) => {
              return (
                <div className="recipeItems" key={id}>
                  <div className="recipeImg">
                    <img style={{ width: "200px", height: "200px" }} src={image} alt="recipe" />
                    <p>
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar /></p>
                  </div>
                  <div className="slideInfo">
                    <p>{title}</p>
                    <p>
                      By <span>{chesf}</span> {time} minutes
                    </p>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
    </div>
  );
};

export default Recipes;
