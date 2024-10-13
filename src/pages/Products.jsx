import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

function FetchProducts() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://fakestoreapi.com/products?sort=desc"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const buttonStyle = {
    // border: 'none',
    padding: "0px",
    width: "200px",
    height: "40px",
  };
  const Loading = () => {
    return <>Loading...</>;
  };
  const FilterProducts = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    // const [cartValue, setCartValue ] = React.useContext{Context}

    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-0">
          <button
            className="btn btn-outline-success me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            style={buttonStyle}
            className="btn btn-outline-success me-2 "
            onClick={() => FilterProducts("men's clothing")}
          >
            Men&apos;s clothing section
          </button>
          <button
            style={buttonStyle}
            className="btn btn-outline-success me-2"
            onClick={() => FilterProducts("women's clothing")}
          >
            Women&apos;s clothing section
          </button>
          <button
            style={buttonStyle}
            className="btn btn-outline-success me-2 "
            onClick={() => FilterProducts("jewelery")}
          >
            Jewellery section
          </button>
          <button
            style={buttonStyle}
            className="btn btn-outline-success me-2 "
            onClick={() => FilterProducts("electronics")}
          >
            Electronics section
          </button>
        </div>
        <div className="row">
          {filter.map((product) => {
            return (
              <>
                <div className="col-md-4" key={product.id}>
                  <div className="card cardDetails2 shadow h-60 text-center p-0 mt-4">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      height="300px"
                      width="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 15)}...
                      </h5>
                      <p className="card-text lead fw-bold text-success ">
                        ${product.price}
                      </p>
                      <Link
                        className="anchor"
                        to={`/productdetails/${product.id}`}
                      >
                        <a
                          href="#"
                          className="btn btn-outline-primary fw-500 ff-poppins"
                        >
                          View details
                        </a>
                        {/* <p>cart value : {cartValue}</p> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container my-8 py-4 bg-warm">
        <div className="row">
          <div className="col-12 mb-10">
            <h1 className="display-6 fw-bolder text-center text-success">
              Explore our December themes
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default FetchProducts;
