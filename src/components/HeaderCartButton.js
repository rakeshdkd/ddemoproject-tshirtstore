import React, {useContext} from "react";
import CartContext from "./cart-context";
// import CartContext from "../../Store/Cart-context";

const HeaderCartButton = (props) => {
    const cartCtx= useContext(CartContext)


  return (
    <button  onClick={props.onClick}>
      <span>
        <h5>{cartCtx.tshirt}</h5>
      </span>
      <span>Your Cart </span>
      <span >{cartCtx.totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
