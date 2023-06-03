import { useParams } from "react-router-dom";
import json from "../../json/review.json";
import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import "./Payment.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Button } from "@mui/base";
const Payment = () => {
  let { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    setData(json.product.find((value) => value.id == id));
  }, [json, id]);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focused: ""
  });
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div id="credit-container">
      <div id="payment-header">
        <p>Enter your payment details:</p>
      </div>
      <br />
      <br />
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <br />
      <br />
      <form id="card-form" onSubmit={handleSubmit}>
        <input id="credit-card"
          type="tel"
          name="number"
          placeholder="Card Number"
          pattern="\d{16}"
          maxLength="16"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input id="credit-owner"
          type="text"
          name="name"
          placeholder="Name"
          pattern="[A-Za-z]{2}"
          maxLength="25"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div id="cvc-expiry">
        <input id="credit-expiry"
          type="text"
          name="expiry"
          placeholder="Expiry"
          pattern="\d{4}"
          maxLength="4"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input id= "credit-cvc"
          type="text"
          name="cvc"
          placeholder="CVC"
          pattern="\d{3}"
          maxLength="3"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        /></div>
      </form>
      <br />
      <div id="course-detailes">
      <div id="course-checkout">
        Chosen course: {data?.course} <br />
        Course starting date: {data?.date} <br />
        <br />
      </div>
      <div className="form-actions">
        Course price: {data?.price}
        <Button id="payment-btn" type="submit" className="btn btn-primary btn-block">
        Submit payment
        </Button>
      </div>
      </div>
    </div>
  );
};
export default Payment;