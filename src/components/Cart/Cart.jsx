import "./Cart.scss";
import { MdOutlineClose } from 'react-icons/md'
import CartItem from './CartItem/CartItem';
import csrtEmpty from '../../assets/empty-cart.jpg'

const Cart = ({ toggleCart, setToggleCart }) => {
  
  return (
    <div className={`cart ${toggleCart ? 'active' : ""}`}>
      <div className="opacity_liner" onClick={() => setToggleCart(false)}></div>
      <div className="cart__content">
        <div className="cart__header">
          <p>Shopping Cart</p>
          <MdOutlineClose onClick={() => setToggleCart(false)} className='close'/>
        </div>
        {/* <div className="cart__empty">
          <div className="cart__empty__icon">
            <img src={csrtEmpty} alt="csrtEmpty" />
            <button className="cart__empty__button" onClick={() => setToggleCart(false)}>Return to shop</button>
          </div>
        </div> */}
        <ul className="cart__items">
          <div className="cart__items__content">
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
            <CartItem /> 
          </div>
          <div className="checkout__block">
            <div className="total__count">
              <h3>SUBTOTAL:</h3>
              <h4>$ 25000</h4>
            </div>
            <button className="cart__button">Checkout</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
