import Shop from "../assets/Shop.jpg";
import "../components/NavBar.css";

function About() {
  return (
    <>
      <div className="about-page">
        <div className="about-us about-us2 bg-warm text-black border-0">
          <img
            src={Shop}
            className="abt-img"
            width="900px"
            height="900px"
            alt="background"
          />
        </div>
        <div className="about-content">
          <div>
            <h2>Welcome to Trendy Trinkets</h2>
            <h3>Your number one online fashion store</h3>
            <p>
              At Trendy Trinkets, we believe that fashion is more than just
              clothing <br />
              brits a form of self-expression. Founded with a passion for
              stylish <br />
              and unique accessories, our online store is dedicated to bringing
              you <br />
              the latest trends and timeless pieces that elevate your wardrobe.
            </p>
          </div>
          <div>
            <h2>We Offer:</h2>
            <p>
              Curated Collections: Our team tirelessly searches for the best
              pieces <br />
              from around the globe, ensuring that our collections reflect{" "}
              <br />
              current trends while remaining accessible and affordable
            </p>
            <p>
              Quality: We prioritize quality and craftsmanship, <br /> so you
              can shop with confidence knowing that each item <br /> has been
              thoughtfully selected for its design and durability.
            </p>
          </div>
          <div>
            <h2>Thank you for choosing us</h2>
            <p>
              We are excited to be part of your style journey. <br />
              Thank you for choosing Trendy Trinkets as your go-to destination{" "}
              <br />
              for trendy fashion accessories. <br />
            </p>
            <h4>We look forward to helping you express your unique style!</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
