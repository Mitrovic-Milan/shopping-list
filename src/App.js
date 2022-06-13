import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  const [products, setProducts] = useState([]);
  const [productSearch, setProductsSearch] = useState("");

  useEffect(() => {
    fetch("https://fetch-me.vercel.app/api/shopping/items")
      .then((response) => response.json())
      .then((productData) => {
        setProducts(productData.data);
      });
  }, []);

  function onHandleSubmit(event) {
    event.preventDefault();
    setProductsSearch(event.target.value);
  }

  return (
    <div className="App">
      <h1>What do you want to buy?</h1>
      <form>
        <lebel htmlFor="Product-Search" aria-lablledby="Search-Product"></lebel>
        <input
          onChange={onHandleSubmit}
          type="text"
          id="Search-Product"
          name="product-search"
        ></input>
        <button type="submit">Search</button>
      </form>

      <hr />

      <h2>Shopping List</h2>
      <tag productSearch={productSearch} products={products} />
    </div>
  );
}

/*function App() {
  const [testFruits, setFruits] = useState(items);

  const apiUrl = "https://fetch-me.vercel.app/api/shopping/items";

  useEffect(() => {
    function loadFruits() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((fruitData) => {
          setFruits(fruitData);
        });
    }

    loadFruits();
  }, []);

  return (
    <>
      <h1>Shopping-List</h1>
      <ul>
        {testFruits.map((fruit) => (
          <li>{fruit.name.en}</li>
        ))}
      </ul>
    </>
  );
}

export default App;*/
