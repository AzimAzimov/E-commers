import "./Product.scss";
import product from '../../../assets/products/earbuds-prod-1.webp'

import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

const Product = () => {
  return (
    <div className="product">
      <div className="heat__block">
        <AiOutlineHeart size={18} className="heart"/>
      </div>
      <div>
        <div className="product__img">
          <img src={product} alt="product" />
        </div>
        <div className="product__info">
          <p>Наушники епт</p>
          <span>$ 25.00</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
