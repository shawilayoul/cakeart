import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import images from "../../assets/images";
import { slideData } from "../../constants/data";
import "./homeSlide.scss";
import { useNavigate } from "react-router-dom";
const HomeSlide = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="slide-container">
        <Slide
        >
          {slideData.map(({ id, image, title, description }) => {
            return (
                <div className="slideItems" key={id}>
                  <div className="silder">
                    <div className="left">
                      <img src={image} alt="" />
                    </div>
                    <div className="midile">
                      <h2>{title}</h2>
                      <p>{description}</p>
                      <button onClick={() => navigate("recipes")}>
                        See The Recipes
                      </button>
                    </div>
                    <div className="right">
                      <img src={image} alt="" />
                    </div>
                  </div>
                </div>
            
            );
          })}
        </Slide>
      </div>
      <div className="ourSections">
        <div className="items">
          <div className="left">
            <img src={images.iconbox1} alt="" />
          </div>
          <div className="right">
            <h2>Products</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <img src={images.iconbox2} alt="" />
          </div>
          <div className="right">
            <h2>Cake Class</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <img src={images.iconbox3} alt="" />
          </div>
          <div className="right">
            <h2>Ricepes</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
