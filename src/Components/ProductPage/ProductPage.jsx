import "./ProductPage.css";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../Contexts/MainContext";
import { Link } from 'react-router-dom';
import { Button } from "@mui/base";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function ProductPage() {
  let { id } = useParams();
  const { data, setData } = useContext(MainContext);
  const [temp, setTemp] = useState({});
   useEffect(() => {
    setTemp(data.product?.find(value => value.id == id))
  }, [data, id]);
  
  return (
    <div id="course-container">
      <div id="top-course-container">
        <div id="course-header">
          <p id="course-name">{temp?.course}</p>
          <img id="course-img" src={temp?.img} />
        </div>
      </div>
      <br /><br /><br />
      <div>
        <div id="course-paragraths">
          {temp?.paragrath1}<br /><br /><br />
          {temp?.paragrath2}<br /><br /><br />
          {temp?.paragrath3}<br /><br /><br />
        </div>
        <div id="course-info">
          <p className="course-details">Languages:</p>{temp?.languages} <br /><br />
          <p className="course-details">Course length:</p>{temp?.length} <br /><br />
          <p className="course-details">Course starting date: </p>{temp && temp['start-date']} <br />
          <p className="course-details">Course starting date: </p>{temp && temp['end-date']} <br />
        </div><br />
        <div id="course-prof-container">
          <p id="course-prof-name">Course Proffesor: {temp?.proffesor}</p>  <br />
          <br /> <img id="prof-course-img" src={temp?.proffesorImg} /><br />
        </div>
      </div>
      <Button id="payment-link">
        <Link to={`/Payment/${id}`}> <p id="click-checkout">Click to checkout<AddShoppingCartIcon /></p></Link>
      </Button>
    </div>
  );
}
export default ProductPage;

