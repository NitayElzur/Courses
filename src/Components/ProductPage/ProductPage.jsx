import React from "react";
import "./ProductPage.css";

function ProductPage({ data }) {
  return (
    <div id="course-container">
      <div id="top-course-container">
        <div id="course-header">
          <p>{`${data.course}`}</p>
          <img src={`${data.img}`}/>
        </div>
      </div>
      <div>
        <div id="course-paragraths">
          {`${data.paragrath1}`}
          {`${data.paragrath2}`}
          {`${data.paragrath3}`}
        </div>
        <div id="course-info">
         {`${data.languages}`}
          {`${data.length}`}
        </div>
        <div id="course-prof-container">
          <img src={`${data.proffesor_img}`} alt={`${data.proffesor}`} />
          {`${data.proffesor}`}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
