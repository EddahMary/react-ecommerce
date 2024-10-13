import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "./NavBar.css";
import "font-awesome/css/font-awesome.min.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <img src={Logo} 
          className="logo-img"
          height= "70px"
          width= "400px"
          alt="Trendy Trinkets" />
          <a className="navbar-brand fw-bold fs-4 color-blue" href="#">
            Trendy Trinkets
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="anchor" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="anchor" to={"/products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="anchor" to={"/about"}>
                  About us
                </Link>
              </li>
            </ul>
            <div className="buttons w-60 br-10">
              <Link to={"/login"}>
                <button className="btn btn-primary">
                  <i className="fa fa-user"></i>&nbsp; Log in
                </button>
              </Link>
              <Link to={"/myorders"}>
                <button className="btn btn-primary">
                  <i className="fa fa-shopping-bag"></i>&nbsp; My orders
                </button>
              </Link>
              <Link to={"/cart"}>
                <button className="btn btn-primary">
                  <i className="fa fa-cart-plus"></i>&nbsp; My cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
