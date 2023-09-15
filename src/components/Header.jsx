import { useState } from "react";
import "../styles/Header.css";
// import searchIcon from "../assets/searchIcon.svg";
// import signoutIcon from "../assets/signoutIcon.svg";
// import profileIcon from "../assets/profileIcon.svg";
// import bellIcon from "../assets/bellIcon.svg";

export default function Header2() {
  const [popup, setPopup] = useState(false);
  return (
    <header >
      <p>Tax Evasion</p>
      <form id="header-form">
        <input type="text" placeholder="Search" />
        <button type="submit">
          {/* <img id="search-icon" src={searchIcon} /> */}
        </button>
      </form>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div id="user-util">
        <span>
          {/* <img src={bellIcon} /> */}
        </span>
        <a onClick={() => setPopup(!popup)}>SD</a>
      </div>
      {popup && (
        <div className="popup">
          <p>
            {/* <img src={profileIcon} /> */}
            <span>View Profile</span>
          </p>
          <p id="signout-btn">
            {/* <img src={signoutIcon} /> */}
            <span>Sign Out</span>
          </p>
        </div>
      )}
    </header>
  );
}