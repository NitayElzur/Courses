import "./NoMatch.css";
import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <div id="error-container">
          <div id="error-top">
            <p>Error 404</p> <br />
          </div>
          <div id="sorry">
            <p>Sorry, page not found</p>
          </div><br />
          <button id="link-back-home"><Link to="/">Take me to Hompe page</Link></button>
      </div>
    </>
  );
}

export default NoMatch;
