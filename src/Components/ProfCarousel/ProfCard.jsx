import React from "react";
import json from "../../json/review.json";
import "./ProfCard.css"
function ProfCard({result}) {
  return (
    <>
      <div className="prof-container">
        <div id="prof-img-container">
        <img id="prof-img" src={`${result?.img}`}/></div>
        <br />
       <div className="prof-info">  {`${result?.name}`}</div>
        <br />
        <div className="prof-info">
          {`${result?.practice}`}.
          <br />
          {`${result?.qualification}`}.
          <br />
         Working Experience: {`${result?.work}`}
          <br />
        </div>
      </div>
    </>
  );
}

export default ProfCard;
