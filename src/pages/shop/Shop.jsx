import React from "react";
import images from "../../assets/images";
import "./shop.scss";
import Button from "../../components/Button";

const Shop = () => {
  return (
    <div className="shopContainer">
      <div className="shopImag">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Shop</h2>
        </div>
      </div>
      <div className="shopElements">
        <div className="sideBar">
          <div className="searchBar">
            <input type="text" placeholder="Search Product" />
          </div>
          <h2>Product Categories</h2>
          <div className="btnProduct">
            <Button title="Apple" btnValue={2} />
          </div>
          <div className="btnProduct">
            <Button title="Celebration" btnValue={14} />
          </div>
          <div className="btnProduct">
            <Button title="Chocolate" btnValue={15} />
          </div>
          <div className="btnProduct">
            <Button title="Cupcake" btnValue={17} />
          </div>
          <div className="btnProduct">
            <Button title="Desserts" btnValue={11} />
          </div>
          <div className="btnProduct">
            <Button title="Uncategorized" btnValue={2} />
          </div>
          <div className="filterPrice">
            <h3>Filter By Price</h3>
            <input type="range" className="intput-range" />
            <div className="price">
              <p>Price: $0-$20</p>
              <p>filter</p>
            </div>
          </div>
          <div className="topSale">
            <h3>Top Sale Products</h3>
            <div className="topSaleProduct">
              <img src={images.cake2} alt="" />
              <div className="productInfo">
                <p>Blact Forest</p>
                <p>*******</p>
                <p>$18.00</p>
              </div>
            </div>
            <div className="topSaleProduct">
              <img src={images.cake5} alt="" />
              <div className="productInfo">
                <p>Blact Forest</p>
                <p>*******</p>
                <p>$18.00</p>
              </div>
            </div>
            <div className="topSaleProduct">
              <img src={images.cake1} alt="" />
              <div className="productInfo">
                <p>Blact Forest</p>
                <p>*******</p>
                <p>$18.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shopMenuContainer">
          <div className="sortBar">
            <div className="left">
              <p>Showing 1–12 of 23 results</p>
            </div>
            <div className="right">
              <p>SortBy:</p>
              <select name="" id="">
                <option value="">Default</option>
                <option value="">Popularity</option>
                <option value="">Rating</option>
                <option value="">Newness</option>
                <option value="">Low to high</option>
                <option value="">High to low</option>
              </select>
            </div>
          </div>
          <div className="shopMenus">
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake1j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
