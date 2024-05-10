import "@splidejs/react-splide/css/sea-green";
import images from "../../assets/images";
import { slideData } from "../../constants/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./homeSlide.scss";
const HomeSlide = () => {
  console.log(slideData);
  return (
    <div className="container">
      <div className="homeSlideContainer">
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: false,
            rewind: false,
            width: 1000,
          }}
          aria-labelledby="autoplay-example-heading"
        >
          {slideData.map((slide) => {
            return (
              <SplideSlide>
                <div className="slideItems">
                  <div className="silder">
                    <div className="left">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="midile">
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                      <button>See The Recipes</button>
                    </div>
                    <div className="right">
                      <img src={slide.image} alt="" />
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
            <img src={images.cake1} alt="" />
          </div>
          <div className="right">
            <h2>Products</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <img src={images.cake1} alt="" />
          </div>
          <div className="right">
            <h2>Cake Class</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <img src={images.cake1} alt="" />
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
