import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [filterby,SetFilterBy] = useState("All")


  function handleFilter (e){
    SetFilterBy(e.target.value)
  }
  let filteredItems = items.filter((item)=>{
    if(filterby === "All"){
      return true
      }else 
      return (filterby === item.category)
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
