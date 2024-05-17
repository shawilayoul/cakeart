import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const navigate = useNavigate()
  return (
    <nav className="headerContainer">
      <div className="logo">
        <h2 onClick={()=>navigate('/')}>
          Silver <span>Cake</span>
        </h2>
      </div>
      <div className="menu">
        <div className="menuLeft">
          <ul>
            <li>
              <Link to="/" className="text-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="blog" className="text-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="recipes" className="text-link">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="shop" className="text-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="about" className="text-link">
                About us
              </Link>
            </li>
            <li>
              <Link to="contact" className="text-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="menuRight">
          <div className="searchBar">
            <FaSearch />
          </div>
          <div className="cart" onClick={()=>navigate('cart')}>
            <FaCartShopping />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
