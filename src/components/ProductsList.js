import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(" ");


  const API_URL = process.env.REACT_APP_API_URL;
  
  const getProducts = async () => {
    let products = await fetch(`${API_URL}/products`);
    products = await products.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let resultado = [];
  if (!products) {
    resultado = products;
  } else {
    resultado = products?.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLowerCase().trim())
    );
  }

  return (
    <>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Estado"
        className="form-control"
        style={{ width: "31%" }}
      ></input>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {
          resultado?.map((product) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "17px",
              }}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.state}
                  </Card.Subtitle>
                  <Card.Text>{product.description}.</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.currentDay}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductList;
