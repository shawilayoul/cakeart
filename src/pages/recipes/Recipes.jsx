import images from "../../assets/images";
import "./recipes.scss";
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
            <input type="text" />
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
            <input type="text" />
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
        <div className="recipeItems">
          <div className="recipeImg">
            <img style={{width:"200px",height:"200px"}} src={images.cake6j} alt="" />
            <p>******</p>
          </div>
          <div className="slideInfo">
            <p>Black Forest</p>
            <p>
              By <span> Ali</span> 10 minutes
            </p>
          </div>
        </div>
        <div className="recipeItems">
          <div className="recipeImg">
            <img style={{width:"200px",height:"200px"}}  src={images.cake2j} alt="" />
            <p>******</p>
          </div>
          <div className="slideInfo">
            <p>Black Forest</p>
            <p>
              By <span> Ali</span> 10 minutes
            </p>
          </div>
        </div>
        <div className="recipeItems">
          <div className="recipeImg">
            <img style={{width:"200px",height:"200px"}}  src={images.cake4j} alt="" />
            <p>******</p>
          </div>
          <div className="slideInfo">
            <p>Black Forest</p>
            <p>
              By <span> Ali</span> 10 minutes
            </p>
          </div>
        </div>
        <div className="recipeItems">
          <div className="recipeImg">
            <img style={{width:"200px",height:"200px"}}  src={images.cake5j} alt="" />
            <p>******</p>
          </div>
          <div className="slideInfo">
            <p>Black Forest</p>
            <p>
              By <span> Ali</span> 10 minutes
            </p>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Recipes;
