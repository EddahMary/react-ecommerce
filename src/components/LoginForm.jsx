import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import Shop from '../assets/Shop.jpg'

function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    error: "",
  });
  //   const [email, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("logging in", loginDetails);

    // validating using if(ternary operators)
    if (!loginDetails.email || !loginDetails.password) {
      setLoginDetails.Error("Please fill out the above fields");
      return;
    }

    // Reset error message
    setLoginDetails.Error("");

    console.log(
      "Logging in with:",
      (loginDetails.email, loginDetails.password)
    );
  };

  return (
    <div className="main-container">
        {/* <div className="shop">
          <img src={Shop} alt="Fashion" />
        </div> */}
        <div className="form-content">
          <h2>Welcome</h2>
          <br />
          {loginDetails.error && (
            <p style={{ color: "red" }}>{loginDetails.error}</p>
          )}
          {/* event handling (submitting) */}
          <form onSubmit={handleSubmit}>
            <div>
              {/* <label>Username:</label> */}
              <i className="fa fa-user-circle-o m-2"></i>&nbsp;
              <input
                className="input-field"
                type="email"
                placeholder="Email/Username"
                onChange={(e) => setLoginDetails.Username(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              {/* <label>Password:</label> */}
              <i className="fa fa-lock m-2"></i>&nbsp;
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                onChange={(e) => setLoginDetails.Password(e.target.value)}
                required
              />
            </div>
            <br />
            <br />
            <p>Forgot password?</p>
            <button
              type="submit"
              style={{
                width: "80px",
                height: "35px",
                border: "none",
                borderRadius: "20px",
                backgroundColor: "lightgreen",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              Login
            </button>
            <br />
            <br />
          </form>
          <br />
          <p
            style={{
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            New to Trinkets?
          </p>
          <Link to={"/signup"}>
            <button
              type="submit"
              style={{
                width: "150px",
                height: "50px",
                border: "none",
                borderRadius: "30px",
                backgroundColor: "lightgreen",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              Create account
            </button>
          </Link>
        </div>
      </div>
  );
}
export default LoginForm;
