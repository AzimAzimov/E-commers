import "./Category.scss";
import second1 from '../../../assets/category/cat-2.jpg'

const Category = () => {
  return (
    <div className="shop__by__category">
      <div className="categories">
        <div className="category">
          <img src={second1} alt="second1" />
        </div>
        <div className="category">
          <img src={second1} alt="second1" />
        </div>
        <div className="category">
          <img src={second1} alt="second1" />
        </div>
        <div className="category">
          <img src={second1} alt="second1" />
        </div>
      </div>
    </div>
  )
};

export default Category;