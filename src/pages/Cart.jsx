import React from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

function Cart() {
  const { cartValue } = React.useContext(CartContext);

  return (
    <div className="cart-container cart-container1 text-center p-0 mt-2">
      <h1> My cart</h1>
      {cartValue.length === 0 ? (
        <h2>
          Ooops! Your cart is empty <br />
          Browse our best categories and discover our best deals! <br />
          <br />
          <Link to={"/products"}>
            <button className="btn btn-outline-success mb-10 fw-500 ff-poppins">
              Start shopping
            </button><br />
          </Link>
        </h2>
      ) : (
        cartValue.map((product, index) => (
          
          <div className="col-md-4 card card1" key={index}>
              <div className="card-content">
                <h5>{product.title}</h5>
                <img
                  src={product.image}
                  className="card-img"
                  height="200px"
                  width="300px"
                  alt={product.title}
                />
                <div>
                  <p className="card-text lead fw-bold text-success ">
                    ${product.price}
                  </p>
                  <button className="btn btn4 fw-700 ff-poppins">
                    Remove
                  </button>
                </div>
              </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
