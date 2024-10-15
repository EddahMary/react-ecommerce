import { useState } from "react";
import "./NavBar.css"
import Logo from '../assets/Logo.png'
import { Link } from "react-router-dom";

function SignupForm() {
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    secondName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    error: "",
  });
  //   const [fullName, setFullName] = useState("");
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("abcdefgh", signupDetails);

    // validating the form using ! - if the fields aren't filled accordingly an error is displayed/execution fails
    if (
      !signupDetails.firstName ||
      !signupDetails.secondName ||
      !signupDetails.email ||
      !signupDetails.username ||
      !signupDetails.password ||
      !signupDetails.confirmPassword
    ) {
      setSignupDetails.Error("Please fill in all fields");
      return;
    }
    // !-ternary operator to check if expression is falsei.e if password entered isn't
    // same as password entered for confirmation if not an error is thrown
    if (signupDetails.password !== signupDetails.confirmPassword) {
      setSignupDetails.Error("Passwords do not match");
      return;
    }

    setSignupDetails.Error("");
    console.log(
      "Signing up with:",
      (signupDetails.username, signupDetails.password)
    );
  };

  return (
    <div className="main-container">
      <div className="form-content">
        <img src={Logo} 
        height= "100px"
        width= "200px"
        alt="Trendy Trinkets" />
        <h2>Create your Trinkets account</h2>
        <br />
        {signupDetails.error && (
          <p style={{ color: "red" }}>{signupDetails.error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>Full Name:</label> */}
            <br />
            <i className="fa fa-id-card-o m-2" ></i>&nbsp;
            <input className="input-field"
              type="text"
              // value={signupDetails.fullName}
              onChange={(e) => setSignupDetails.fullName(e.target.value)}
              placeholder="First name"
              required
            />
          </div>
          <br />
          <div>
            {/* <label>Full Name:</label> */}
            <br />
            <i className="fa fa-id-card-o m-2" ></i>&nbsp;
            <input className="input-field"
              type="text"
              // value={signupDetails.fullName}
              onChange={(e) => setSignupDetails.fullName(e.target.value)}
              placeholder="Second name"
              required
            />
          </div>
          <br />
          <div>
            {/* <label>Email address:</label> */}
            <br />
            <i className="fa fa-envelope m-2" ></i>&nbsp;
            <input className="input-field"
              type="text"
              // value={signupDetails.email}
              onChange={(e) => setSignupDetails.email(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>
          <br />
          <div>
            {/* <label>Username:</label> */}
            <br />
            <i className="fa fa-user-circle-o m-2" ></i>&nbsp;
            <input className="input-field"
              type="text"
              // value={signupDetails.username}
              onChange={(e) => setSignupDetails.username(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <br />
          <div>
            {/* <label>Password:</label> */}
            <br />
            <i className="fa fa-lock m-2" ></i>&nbsp;
            <input className="input-field"
              type="password"
              // value={signupDetails.password}
              onChange={(e) => setSignupDetails.Password(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <br />
          <div>
            {/* <label>Confirm Password:</label> */}
            <br />
            <i className="fa fa-unlock-alt m-2" ></i>&nbsp;
            <input className="input-field"
              type="password"
              // value={signupDetails.confirmPassword}
              onChange={(e) => setSignupDetails.ConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>
          <br />
          <button
            type="submit"
            style={{
              width: "90px",
              height: "40px",
              border: "none",
              borderRadius: "20px",
              backgroundColor: "lightgreen",
              textAlign: "center",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Sign up
          </button><br />
          <Link to ={"/login"}>
          <button type="submit"
              style={{
                width: "150px",
                height: "60px",
                lineHeight: "20px",
                border: "none",
                borderRadius: "30px",
                backgroundColor: "lightgreen",
                textAlign: "center",
                fontSize: "18px",
              }}>Go back to login page</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
