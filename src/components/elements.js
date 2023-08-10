import "./elements.css";
import logo from "./assets/logo-middle-w.png"; // with import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Element = () => {
  return (
    <nav>
      <div className="lists">
        <div id="service-header">
          Services&nbsp;
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontSize: "12.4px" }}
          />
          <ul id="service-lists">
            <li>Develop a Website</li>
            <li>Email Marketing</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>
      </div>
      <div className="Logo">
        <img src={logo} alt="" />
      </div>
      <button>CONTACT US</button>
    </nav>
  );
};

export default Element;
