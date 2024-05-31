import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart,setCart]= useState(false)

  function handleCart (){
    setCart((inCart) => !inCart)
  }


  const buttonText = inCart ?  "Remove from Cart" : "Add to Cart"; // conditional button text

  
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
