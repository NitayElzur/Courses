import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../Contexts/MainContext";
import Cards from "react-credit-cards-2";
import "./Payment.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Button } from "@mui/base";
const Payment = () => {
  let { id } = useParams();
  const {data , setData} = useContext(MainContext);
  const [temp, setTemp] = useState({})
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setTemp(data.product.find(value => value.id == id))
  }, [data, id]);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focused: "",
  });
  const [errors, setErrors] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "expiry") {
      const [month, year] = value.split("/");
      setState((prev) => ({
        ...prev,
        expiry: value,
        month: month,
        year: year,
      }));
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (submitted) {
        if (!/^(0?[1-9]|1[0-2])$/.test(month)) {
          setErrors((prev) => ({
            ...prev,
            expiry: "Please enter a valid month",
          }));
        } else if (!/^\d{2}$/.test(year)) {
          setErrors((prev) => ({ ...prev, expiry: "Please enter a valid year" }));
        } else {
          setErrors((prev) => ({ ...prev, expiry: "" }));
        }
      }
    } else if (name === "name") {
      const nameParts = value.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts[nameParts.length - 1];
      if (submitted) {
        setErrors((prev) => ({
          ...prev,
          name:
            firstName && lastName
              ? ""
              : "Please enter both first and last name",
        }));
      }
      setState((prev) => ({ ...prev, [name]: value }));
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (state.name.trim().split(" ").length < 2) {
      setErrors((prev) => ({
        ...prev,
        name: "Please enter both first and last name",
      }));
      return;
    }
    if (hasErrors) {
      alert("Please fix the errors in the form");
      return;
    }
    setSubmitted(true);
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
        <input
          id="credit-card"
          type="tel"
          name="number"
          placeholder="Card Number"
          pattern="\d{16}"
          maxLength="16"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors.number && <div className="error">{errors.number}</div>}
        <input
          id="credit-owner"
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[A-Za-z\s]+$"
          maxLength="25"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <input
          id="credit-expiry"
          type="text"
          name="expiry"
          placeholder="MM/YY"
          maxLength="5"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors.expiry && <div className="error">{errors.expiry} </div>}
        <input
          id="credit-cvc"
          type="text"
          name="cvc"
          placeholder="CVC"
          pattern="\d{3}"
          maxLength="3"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors.cvc && <div className="error">{errors.cvc}</div>}
        <Button
          id="payment-btn"
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit payment
        </Button>
      </form>
      {submitted && <p className="submited">Form submitted successfully!</p>}
      <br />
      <div id="course-detailes">
        <div id="course-checkout">
          Chosen course: {temp?.course} <br />
          Course starting date: {temp['start-date']} <br />
          Course starting date: {temp['end-date']} <br />
          <br />
        </div>
        <div className="form-actions">Course price: {temp?.price}</div>
      </div>
    </div>
  );
};
export default Payment;