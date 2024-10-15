import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignupForm";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout />}>
            <Route index path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/myorders" element={<My Orders />} /> */}
            {/* <Route path="/mycart" element={<My Cart/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
