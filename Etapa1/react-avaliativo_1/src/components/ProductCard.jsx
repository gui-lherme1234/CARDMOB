import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddOrUpdateProduct = () => {
    if (name && price) {
      if (editingId !== null) {
        const updatedProducts = products.map((product) =>
          product.id === editingId
            ? { ...product, name, price: parseFloat(price).toFixed(2) }
            : product
        );
        setProducts(updatedProducts);
        setEditingId(null);
      } else {
        const newProduct = {
          id: Date.now(),
          name,
          price: parseFloat(price).toFixed(2),
        };
        setProducts([...products, newProduct]);
      }
      setName("");
      setPrice("");
    }
  };

  const handleDeleteProduct = (id) => {
    const updated = products.filter((product) => product.id !== id);
    setProducts(updated);
    if (editingId === id) {
      setEditingId(null);
      setName("");
      setPrice("");
    }
  };

  const handleEditProduct = (product) => {
    setEditingId(product.id);
    setName(product.name);
    setPrice(product.price);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`Produto "${product.name}" adicionado ao carrinho!`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="product-list">
      <h2>{editingId ? "Editar Produto" : "Cadastro de Produtos"}</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAddOrUpdateProduct}>
          {editingId ? "Salvar" : "Adicionar"}
        </button>
      </div>

      {message && <p style={{ color: "lightgreen" }}>{message}</p>}

      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            onDelete={() => handleDeleteProduct(product.id)}
            onEdit={() => handleEditProduct(product)}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;