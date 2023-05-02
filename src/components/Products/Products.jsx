import Product from "./Product/Product";
import "./Products.scss";


const Products = ({ innerPage, headingText }) => {
  return (
    <div className="products">
      {!innerPage && <div className="products__heading">{headingText}</div>}
      <div className="products__content">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
