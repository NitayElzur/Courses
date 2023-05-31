import React from "react";
import json from "../../json/review.json";
import "./ProfCard.css"
function ProfCard({result}) {
  return (
    <div className="prof-container">
      <div className="prof-scondery-container">
        <div id="prof-img-container">
        <img id="prof-img" src={`${result?.img}`}/>
        </div>
        <div id="prof-info">
          {`${result?.name}`} <br />
          {`${result?.practice}`}
          <br />
          {`${result?.qualification}`}
          <br />
         Earlier working places: {`${result?.work}`}
          <br />
        </div>
      </div>
    </div>
  );
}

export default ProfCard;
