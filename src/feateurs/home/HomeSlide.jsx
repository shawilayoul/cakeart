import "@splidejs/react-splide/css/sea-green";
import images from "../../assets/images";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./homeSlide.scss";
const HomeSlide = () => {
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
          {" "}
          <SplideSlide>
            <div className="silder">
              <div className="left">
                <img src={images.cake1} alt="" />
              </div>
              <div className="midile">
                <h2>Celebaration Cake</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  quis ad reprehenderit maiores a saepe soluta ea at molestias
                  alias?
                </p>
                <button>See The Recipes</button>
              </div>
              <div className="right">
                <img src={images.cake1} alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="silder">
              <div className="left">
                <img src={images.cake2} alt="" />
              </div>
              <div className="midile">
                <h2>Celebaration Cake</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  quis ad reprehenderit maiores a saepe soluta ea at molestias
                  alias?
                </p>
                <button>See The Recipes</button>
              </div>
              <div className="right">
                <img src={images.cake2} alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="silder">
              <div className="left">
                <img src={images.cake3} alt="" />
              </div>
              <div className="midile">
                <h2>Celebaration Cake</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  quis ad reprehenderit maiores a saepe soluta ea at molestias
                  alias?
                </p>
                <button>See The Recipes</button>
              </div>
              <div className="right">
                <img src={images.cake3} alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="silder">
              <div className="left">
                <img src={images.cake4} alt="" />
              </div>
              <div className="midile">
                <h2>Celebaration Cake</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  quis ad reprehenderit maiores a saepe soluta ea at molestias
                  alias?
                </p>
                <button>See The Recipes</button>
              </div>
              <div className="right">
                <img src={images.cake4} alt="" />
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className="ourSections">
        <div className="items">
          <div className="left">
            <img src={images.cake1} alt="" />
          </div>
          <div className="right">
            <h2>Products</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <img src={images.cake1} alt="" />
          </div>
          <div className="right">
            <h2>Cake Class</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <img src={images.cake1} alt="" />
          </div>
          <div className="right">
            <h2>Ricepes</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
