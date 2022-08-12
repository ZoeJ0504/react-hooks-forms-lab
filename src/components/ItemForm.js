import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName]=useState("")
  const [itemCategory, setItemCategory]=useState("Produce")

function handleOnChangeOne(event){
  setItemName(event.target.value)
}

function handleOnChangeTwo(event){
  setItemCategory(event.target.value)
}


function handleSubmit(event){
event.preventDefault()
const newItem = {
  id: uuid(),
  name: itemName,
  category: itemCategory
}
onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleOnChangeOne}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleOnChangeTwo}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
