// import React from "react";

// const CartContext = React.createContext({
//   id:'',
//   tshirt: '',
//   quantity: 0,
  
// });

// export default CartContext;
import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
