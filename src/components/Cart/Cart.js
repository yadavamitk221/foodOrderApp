/** @format */
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const CartItem = (
    <ul className="cart-items">
      {[
        {
          id: "c1",
          name: "Green Bowl",
          price: 18.99,
        },
      ].map(item => <li>{item.name}</li>)}
    </ul>
  );
  return (
    <Modal>
      {CartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>35.26</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
