import Barchart from "./Chart/barchart";

import Image from "../../Images/default-profile.jpg";
import "./layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="header">
        <h2>Dashboard</h2>
        <form>
          <input
            type="text"
            placeholder="&#x1F50E;&#xFE0E;     Search here..."
            style={{ fontFamily: "FontAwesome" }}
          />
          <button>+</button>
        </form>
      </div>

      <div className="mid-header">
        <div className="mid-nav-one">
          <p>Ongoing Projects</p>
        </div>
        <ul className="mid-nav-two">
          <li>Remaining</li>
          <li className="active">Ongoing </li>
          <li>Completed</li>
        </ul>
      </div>

      <div className="mid">
        <div className="graph-background">
          <div className="app-design-blue">
            <p>
              App Design
              <br />
              <span>
                <small>17 August 2021</small>
              </span>
            </p>
          </div>

          <div className="mid-red">
            <div className="app-design-red">
              <p>
                App Design
                <br />
                <span>
                  <small>17 August 2021</small>
                </span>
              </p>
            </div>
            <div className="mid-red-img-container">
              <img src={Image} alt="default-profile" />
              <img src={Image} alt="default-profile" />
              <img src={Image} alt="default-profile" />
            </div>
          </div>

          <div className="mid-yellow">
            <div className="app-design-yellow">
              <p>
                App Design
                <br />
                <span>
                  <small>17 August 2021</small>
                </span>
              </p>
            </div>
            <div className="loader">
              <div className="loader-fill">
                <input type="range" min="1" max="100" value="100" />
              </div>
              <p>80%</p>
            </div>
          </div>
        </div>

        <div className="mid-bottom">
          <div className="todo"></div>
          <p>Todo</p>
          <div className="progress"></div>
          <p>InProgress</p>
          <div className="completed"></div>
          <p>Completed</p>
        </div>
      </div>

      <div className="task">
        <div className="task-remaining">&#8593;</div>
        <p>
          Task Remaining <br />
          <span>12/15</span>
        </p>
        <div className="task-left">&#8595;</div>
        <p>
          Task left <br />
          <span>12/15</span>
        </p>
        <div className="task-done">&#8592;</div>
        <p>
          Task done <br />
          <span>12/15</span>
        </p>
      </div>

      <div className="barchart-header">
        <h2>Progress Stats</h2>
        <div className="barchart-nav">
          <p>day</p>
          <p>week</p>
          <p className="barchart-nav-active">month</p>
        </div>
      </div>
      <Barchart />
    </div>
  );
};

export default Layout;
