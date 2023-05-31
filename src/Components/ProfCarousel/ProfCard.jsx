import React from "react";
import json from "../../json/review.json";
import "./ProfCard.css"
function ProfCard({result}) {
  return (
    <>
      <div className="prof-container">
        <div id="prof-img-container">
        <img id="prof-img" src={`${result?.img}`}/>
        </div>
        <br />
        <div id="prof-info">
          {`${result?.name}`} <br />
          {`${result?.practice}`}
          <br />
          {`${result?.qualification}`}
          <br />
         Earlier work: {`${result?.work}`}
          <br />
        </div>
      </div>
    </>
  );
}

export default ProfCard;
