import "./ProductPage.css";
import json from "../../json/review.json";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../Contexts/MainContext";
import {Link } from 'react-router-dom';
import { Button } from "@mui/base";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function ProductPage() {
    let { id } = useParams();
  const {data , setData} = useContext(MainContext)
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
   <p className="course-details">Languages:</p>{data?.languages} <br /><br />
   <p className="course-details">Course length:</p>{data?.length} <br /><br />
   <p className="course-details">Course starting date: </p>{data['start-date']} <br />
   <p className="course-details">Course starting date: </p>{data['end-date']} <br />
        </div><br />
        <div id="course-prof-container">
       <p id="course-prof-name">Course Proffesor: {data?.proffesor}</p>  <br />
         <br /> <img id="prof-course-img" src={data?.proffesorImg}/><br />
        </div>
      </div>
      <Button id="payment-link">
     <Link to={`/Payment/${id}`}> <p id="click-checkout">Click to checkout<AddShoppingCartIcon/></p></Link>
     </Button>
    </div>
  );}
export default ProductPage;

