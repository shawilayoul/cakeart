import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { homeMenuData } from "../../constants/data";
import './singleMenu.scss'
import images from "../../assets/images";

const SigleMenu = () => {
  const { id: menuId } = useParams();
  const menu = homeMenuData.filter(({ id }) => id == menuId);
  console.log(menu[0].title)
  return (
    <div className="singlMenuContainer">
         <div className="singlMTop">
        <img src={images.bgImage} alt="menu" />
        <div className="title">
          <h2>Our Shop</h2>
        </div>
      </div>
      <div className="menuItems">
        <div className="menuImg">
          <img src={menu[0].image} alt="" />
        </div>
        <div className="menuInfo">
          <h3>{menu[0].title}</h3>
          <p>${menu[0].price}</p>
          <button onClick={() => navigate("cart")}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SigleMenu;
