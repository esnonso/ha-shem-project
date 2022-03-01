import { useState } from "react";
import Calendar from "react-calendar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";

import "react-calendar/dist/Calendar.css";
import Image from "../../Images/pro-version.png";
import Call from "../../Images/call.png";

import "./timer.css";
const Timer = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="timer">
      <header>
        <p className="notification">
          <FontAwesomeIcon icon={faBell} size="xl" />
        </p>
        <p className="notification">
          <FontAwesomeIcon icon={faCog} size="xl" />
        </p>
      </header>

      <img src={Image} alt="pro-version" />

      <div className="calendar-div">
        <Calendar onChange={onChange} value={value} className="calendar" />
      </div>

      <div className="bottom">
        <div className="bottom-head">
          <p className="manager">
            Project Manager
            <br />
            <span>Client Meeting</span>
          </p>
          <p>+ New</p>
        </div>
        <img src={Call} alt="call-button" />
      </div>
    </div>
  );
};

export default Timer;
