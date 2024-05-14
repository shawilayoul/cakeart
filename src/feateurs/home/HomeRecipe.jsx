import React from "react";
import images from "../../assets/images";
import "./homeRecipe.scss";
import { FaRegStar } from "react-icons/fa";

import { homeRecipe } from "../../constants/data";
const HomeRecipe = () => {
  return (
    <div className="container">
      <h2>RECENT RECIPES</h2>
      <div className="RecipeContainer">
        {homeRecipe.map(({id,image,title}) => {
          return (
            <div className="recipeItems" key={id}>
              <div className="recipeImg">
                <img src={image} alt="" />
                <p>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                </p>
              </div>
              <div className="slideInfo">
                <p>{title}</p>
                <p>
                  By <span> Ali</span> 10 minutes
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btnview">
        <button>View All</button>
      </div>
      <div className="clientContainer">
        <h3>What client's say?</h3>
        <div className="clientsOpinion">
          <div className="clientiInfo">
            <div className="clientImg">
              <img src={images.person1} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur non fuga commodi repellat
              voluptates, quam at asperiores voluptate repellat distinctio
              impedit?
            </p>
            <h4>Ali</h4>
          </div>
          <div className="clientiInfo">
            <div className="clientImg">
              <img src={images.person5} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur non fuga commodi repellat
              voluptates, quam at asperiores voluptate repellat distinctio
              impedit?
            </p>
            <h4>Ali</h4>
          </div>
          <div className="clientiInfo">
            <div className="clientImg">
              <img src={images.person2} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur non fuga commodi repellat
              voluptates, quam at asperiores voluptate repellat distinctio
              impedit?
            </p>
            <h4>Ali</h4>
          </div>
          <div className="clientiInfo">
            <div className="clientImg">
              <img src={images.person3} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur non fuga commodi repellat
              voluptates, quam at asperiores voluptate repellat distinctio
              impedit?
            </p>
            <h4>Ali</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRecipe;
