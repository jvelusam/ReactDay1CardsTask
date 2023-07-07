import "./styles.css";
import { Container } from "reactstrap";
import ProductList from "./ProductList";
import products from "./products.json";
import ShowCart from "./ShowCart";
import { useState } from "react";
function App() 

{
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeCart = (id) => {
    let filteredProducts = cartItems.filter((value) => value.id !== id);
    setCartItems([...filteredProducts]);
  };
  return (
  <Container mt="5">
    <ShowCart cartItems={cartItems} removeCart={removeCart} />
      <ProductList products={products} addToCart={addToCart} />
  </Container>
  );
}

export default App;
