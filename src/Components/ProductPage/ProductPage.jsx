import React from "react";
import "./ProductPage.css";
import json from "../../json/review.json";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function ProductPage() {
    let { id } = useParams();
    const [data, setData] = useState();
 useEffect(() => {
  setData(json.product.find(value => value.id == id));
}, [json, id]);

  return (
    <div id="course-container">
      <div id="top-course-container">
        <div id="course-header">
          <p id="course-name">{data?.course}</p>
          <img id="course-img" src={data?.img}/>
        </div>
      </div>
      <br /><br /><br />
      <div>
        <div id="course-paragraths">
        {data?.paragrath1}<br /><br /><br />
        {data?.paragrath2}<br /><br /><br />
        {data?.paragrath3}<br /><br /><br />
        </div>
        <div id="course-info">
    Languages used in course: {data?.languages} <br />
    Course length: {data?.length} <br /><br />
        </div>
        <div id="course-prof-container">
          <img id="prof-course-img" src={data?.proffesorImg}/><br />
        Course Proffesor:  {data?.proffesor}
        </div>
      </div>
    </div>
  );}
export default ProductPage;

