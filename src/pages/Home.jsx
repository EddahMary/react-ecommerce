import photo from "../assets/Boutique1.jpg";
import "../components/NavBar.css";

function Home() {
  return (
    <>
      <div className="hero-page">
        <div className="card bg-warm text-black border-0">
          <img
            src={photo}
            className="card-img"
            alt="background"
            height="1500px"
            width="100px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title card-title1 display-3 fw-bolder mb-0">
                Fresh Arrivals!
              </h5>
              <p className="card-text lead fs-2 text-white fs-10">
                Check out our new arrivals. <br />
                Styled for you, by you. <br />
                New trends for you to look awesome!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
