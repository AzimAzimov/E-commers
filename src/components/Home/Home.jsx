import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";


const Home = () => {
  return (
    <>
      <Banner/>
      <div className="main__content">
        <div className="layout">
          <Category/>
          <Products headingText={'Popular Products'}/>
        </div>
      </div>
    </>
  )
};

export default Home;
