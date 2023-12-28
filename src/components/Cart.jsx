import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from './Modal';
import CartContext from './cart-context';
const Cart = (props) => {
    const cartCtx= useContext(CartContext)
  return (
    <Modal onClick={props.onClose}>
      <p>{cartCtx.candyName}</p>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{cartCtx.quantity}</span>

        
      </div>

      <div className={classes.actions}>
        <button className={classes.button_alt} onClick={props.onClose}>
          close
        </button>
        {true && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart