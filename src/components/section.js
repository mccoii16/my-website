import "./section.css";
import wallpaper from "./assets/wallpaper2.jpg"; // with import
import HeaderElement from "./header";

const SectionOne = () => {
  return (
    <div
      className="container-1"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="HeaderEl">
        <HeaderElement />
        <div>
          <p style={{ marginTop: "50px" }}>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(to right, #c6fa84, #8def9a, #58e0b0, #25cfc0, #15bcc7)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}>
              <strong>Further.ph </strong>
            </span>
            is a Cebu-based digital marketing agency that helps local businesses
            reach their unexplored potential.
          </p>
        </div>
        <button id="contact-us">CONTACT US</button>
      </div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default SectionOne;
