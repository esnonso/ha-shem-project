import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faLineChart,
  faHome,
  faUser,
  faPaperPlane,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

import Image from "../../Images/default-profile.jpg";
import Memory from "../../Images/memory.png";

import "./dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <figure>
        <img src={Image} alt="default-profile-" className="image" />
        <figcaption>
          <h5>Chinonso Nneli</h5>
          <p>UI UX Designer</p>
        </figcaption>
      </figure>

      <div>
        <button className="pro-button">
          <FontAwesomeIcon icon={faGaugeHigh} inverse className="icon" /> Become
          a Pro
        </button>
      </div>

      <nav>
        <p>
          <FontAwesomeIcon icon={faGaugeHigh} size="lg" className="icon" />{" "}
          Dashboard
        </p>
        <p>
          <FontAwesomeIcon icon={faLineChart} size="lg" className="icon" /> Menu
          1
        </p>
        <p>
          <FontAwesomeIcon icon={faHome} size="lg" className="icon" /> Menu 2
        </p>
        <p>
          <FontAwesomeIcon icon={faUser} size="lg" className="icon" /> Menu 3
        </p>
        <p>
          <FontAwesomeIcon icon={faGaugeHigh} size="lg" className="icon" /> Menu
          4
        </p>
        <p>
          <FontAwesomeIcon icon={faPaperPlane} size="lg" className="icon" />{" "}
          Menu 5
        </p>
        <p>
          <FontAwesomeIcon icon={faCubes} size="lg" className="icon" /> Menu 6
        </p>

        <div className="memory">
          <img src={Memory} alt="memory-card" />
          <h3>Buy More Storage</h3>
          <button>Buy Now</button>
        </div>
        <p className="last-menu">
          <FontAwesomeIcon icon={faUser} size="lg" className="icon" /> Menu 7
        </p>
      </nav>
    </div>
  );
};

export default Dashboard;
