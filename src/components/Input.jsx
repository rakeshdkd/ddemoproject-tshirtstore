import React, { useState, useContext } from "react";
import CartContext from "./cart-context";


const Input = (props) => {
  const [data, setData] = useState({
    tshirt: "",
    description: "",
    price: "",
    s: 0,
    m: 0,
    l: 0,
  });
  const [validation, setValidation] = useState(true);
  const [dataArray, setDataArray] = useState([]);
  const cartCtx = useContext(CartContext);

  const inpuHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const ShowDAta = (event) => {
    event.preventDefault();

    setValidation(false);
    const newData = { ...data, id: Math.random().toString() };
    // console.log(dataArray)
    setDataArray([...dataArray, newData]);
  };

  const buyS = () => {
    cartCtx.totalAmount +=1
    console.log(cartCtx.totalAmount);
  };
  const buyM = () => {
    cartCtx.totalAmount +=1
  };
  const buyL = () => {
    cartCtx.totalAmount +=1
  };

  return (
    <>
      <div>
        <label>T-Shirt : </label>
        <input
          placeholder="T-shirt...."
          name="tshirt"
          value={data.tshirt}
          onChange={inpuHandler}
        ></input>
        <label>Description : </label>
        <input
          placeholder="Decsription...."
          name="description"
          value={data.description}
          onChange={inpuHandler}
        ></input>
        <label>Price : </label>
        <input
          placeholder="Price..."
          name="price"
          value={data.price}
          onChange={inpuHandler}
        ></input>
        <label>Qty - S :</label>
        <input
          // placeholder="Price..."
          name="s"
          value={data.s}
          onChange={inpuHandler}
        ></input>
        <label>Qty - M : </label>
        <input
          // placeholder="Price..."
          name="m"
          value={data.m}
          onChange={inpuHandler}
        ></input>
        <label>Qty - L : </label>
        <input
          // placeholder="Price..."
          name="l"
          value={data.l}
          onChange={inpuHandler}
        ></input>
        <button onClick={ShowDAta}>Add</button>
      </div>
      {validation === false ? (
        dataArray.map((data) => {
          return (
            <>
              <div key={data.id}>
                <p>
                  <b>T-Shirt - </b> {data.tshirt}, <b>Description </b> -{" "}
                  {data.description}, <b>Price </b> - {data.price}
                </p>
                <button onClick={buyS}>Buy-S (Avl.-{data.s})</button>
                <button onClick={buyM}>Buy-M (Avl.-{data.m})</button>
                <button onClick={buyL}>Buy - L (Avl.-{data.l})</button>
                {/* {console.log(data)} */}
              </div>
            </>
          );
        })
      ) : (
        <b>Please add the T-shirt data.......</b>
      )}
    </>
  );
};

export default Input;
