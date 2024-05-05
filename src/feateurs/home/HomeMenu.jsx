import images from "../../assets/images";
import "./homemenu.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HomeMenu = () => {
  return (
    <div className="menuContainer">
      <div>
        <h2 style={{ color: "red" }}>Our Menu</h2>
      </div>
      <div>
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: false,
            rewind: true,
            perPage: 4,
            width: 1000,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
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
          </SplideSlide>
          <SplideSlide>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake2j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake3j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake4j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake5j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItems">
              <div className="slideImg">
                <img src={images.cake6j} alt="" />
              </div>
              <div className="slideInfo">
                <h3>Black Forest</h3>
                <p>$18.00</p>
                <button>Add To Cart</button>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default HomeMenu;
