import images from "../../assets/images";
import "./homemenu.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { homeMenuData } from "../../constants/data";
import { useNavigate } from "react-router-dom";

const HomeMenu = () => {

  const navigate = useNavigate()
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
            width: 1100,
          }}
          aria-label="My Favorite Images"
        >
          {homeMenuData.map(({id,image,title,price}) => {
            return (
              <SplideSlide>
                <div className="slideItems">
                  <div className="slideImg" onClick={()=>navigate(`singlMenu/${id}`)}>
                    <img src={image} alt="" />
                  </div>
                  <div className="slideInfo">
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <button onClick={()=>navigate('cart')}>Add To Cart</button>
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
