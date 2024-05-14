import images from "../../assets/images";
import "./homemenu.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { homeMenuData } from "../../constants/data";

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
          {homeMenuData.map((item) => {
            return (
              <SplideSlide>
                <div className="slideItems">
                  <div className="slideImg">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="slideInfo">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <button>Add To Cart</button>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default HomeMenu;
