import { MdOutlineClose } from 'react-icons/md'

import "./CartItem.scss";
import img from '../../../assets/products/earbuds-prod-1.webp'

const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="cart__item__content">
        <div className="cart__item__img">
          <img src={img} alt="img" />
        </div>
        <div className="cart__item__info">
          <div className="title__block">
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <MdOutlineClose/>
          </div>
          <div className="cart__item__count">
            <button>-</button>
            <span>13</span>
            <button>+</button>
          </div>
          <div className="counter">
            <span>5</span>
            <p>х</p>
            <h4>$ 12 000</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
