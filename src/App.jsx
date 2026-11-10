// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Form from "./pages/Form.jsx";
import Card from "./pages/Card.jsx";
import CarDetails from "./pages/CarDetails.jsx";

import productsData from "./data/Product.js";

function App() {
  const [products, setProducts] = useState(productsData);

  // Only addProduct is needed
  function addProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form onAdd={addProduct} />} />
        <Route
          path="/card"
          element={<Card products={products} />}
        />
        <Route
          path="/car/:id"
          element={<CarDetails products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;