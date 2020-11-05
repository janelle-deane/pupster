import React from 'react';
import { Link, useLocation} from "react-router-dom";

export default function NavTabs() {
    const location =useLocation();
    return (
        <ul className="nav nav-tabs">
            <h2>Pupster</h2>
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Discover"
          className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}
        >
          Discover
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Search"
          className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
    </ul>
    )
}
