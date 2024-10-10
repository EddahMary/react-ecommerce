import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignupForm";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/productdetails/:id" element={<ProductDetails/>}/>

            {/* <Route path="/myorders" element={<My Orders />} /> */}
            {/* <Route path="/mycart" element={<My Cart/>} /> */}
  
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
