import "./blog.scss";
import images from "../../assets/images";
const Blog = () => {
  return (
    <div className="blogContainer">
      <div className="blogTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Blog</h2>
        </div>
      </div>
      <div className="blogBottom">
        <div className="blogImg">
          <img src={images.cake4j} alt="blog" />
        </div>
        <div className="blogInfo">
          <h3>Snack Cake</h3>
          <p>By Thang On Cream Category, Ice, Summer Cake</p>
          <p>
            When I was a kid, I daydreamed that I’d come home 
            from school and, magically, my mom would turn into one <br /> of
            those mothers who would be lavishly frosting a …
          </p>
        </div>
      </div>
      <div className="blogBottom">
        <div className="blogImg">
          <img src={images.cake5j} alt="blog" />
        </div>
        <div className="blogInfo">
          <h3>Snack Cake</h3>
          <p>By Thang On Cream Category, Ice, Summer Cake</p>
          <p>
            When I was a kid, I daydreamed that I’d come home 
            from school and, magically, my mom would turn into one <br /> of
            those mothers who would be lavishly frosting a …
          </p>
        </div>
      </div>
      <div className="blogBottom">
        <div className="blogImg">
          <img src={images.cake2j} alt="blog" />
        </div>
        <div className="blogInfo">
          <h3>Snack Cake</h3>
          <p>By Thang On Cream Category, Ice, Summer Cake</p>
          <p>
            When I was a kid, I daydreamed that I’d come home 
            from school and, magically, my mom would turn into one <br /> of
            those mothers who would be lavishly frosting a …
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
