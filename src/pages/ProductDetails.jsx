import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./productDetails.css";
import { CartContext } from "../Context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { cartValue, setCartValue } = React.useContext(CartContext);

  useEffect(() => {
    console.log("Product ID from URL:", id);
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container d-flex justify-content-center">
      <div className="card cardDetails h-60 shadow text-center p-3 my-5">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          height="400px"
        />
        <div className="card-body">
          <h5 className="card-title card-title2 mb-0">{product.title}</h5>
          <p className="card-text lead fw-bold">{product.description}</p>
          <p className="card-text lead fw-bold text-success ">
            ${product.price}
          </p>
          {/* <a href="#" className="btn btn-primary fw-500 ff-poppins">
                  Add to Cart
                </a> */}
          <div>
            <Link to={"/cart"}>
            <button
              className="btn btn-outline-primary fw-500 ff-poppins"
              onClick={() => setCartValue([...cartValue, product])}
              >
              Add to Cart
            </button>
            <p>cart value : {cartValue.length}</p>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
