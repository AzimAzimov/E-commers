import { MdOutlineClose } from 'react-icons/md'
import CartItem from './CartItem/CartItem';
import csrtEmpty from '../../assets/empty-cart.jpg'
import "./Cart.scss";

const Cart = ({ toggleCart, setToggleCart }) => {
  
  return (
    <>
      <div className={`opacity_liner ${toggleCart ? 'active' : ''}`} onClick={() => setToggleCart(false)}></div>
      <div className={`cart ${toggleCart ? 'active' : ""}`}>
        <div className="cart__content">
          <div className="cart__header">
            <p>Shopping Cart</p>
            <div onClick={() => setToggleCart(false)} className="close__cart">
              <MdOutlineClose />
              <span>close</span>
            </div>
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
    </>
    
  );
};

export default Cart;
