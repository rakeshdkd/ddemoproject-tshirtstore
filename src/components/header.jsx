import React, { useContext, useEffect } from "react";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "./cart-context";
const Header = (props) => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    return;
  }, [cartCtx.quantity]);
  return (
    <>
      <header onClick={props.onShowCart}>
        <button>Home</button>
        <button>About</button>
        <HeaderCartButton onclick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
    </>
  );
};

export default Header;
