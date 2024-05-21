import "@splidejs/react-splide/css/sea-green";
import images from "../../assets/images";
import { slideData } from "../../constants/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./homeSlide.scss";
import { useNavigate } from "react-router-dom";
const HomeSlide = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="homeSlideContainer">
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: false,
            rewind: false,
            width: 1200,
          }}
          aria-labelledby="autoplay-example-heading"
        >
          {slideData.map(({ id, image, title, description }) => {
            return (
              <SplideSlide key={id}> 
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
              </SplideSlide>
            );
          })}
        </Splide>
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
