import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [input, setInput]= useState("")
 

  function handleChange(event){
    setInput(event.target.value)
  }
  const searchResults = items.filter(item => {
   return item.name.toLowerCase().includes(input.toLowerCase())
  })
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleChange} search={input}/>
      <ul className="Items">
        {
       input === "" ? itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      )) : searchResults.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      )) }

      </ul>
    </div>
  );
}

export default ShoppingList;
