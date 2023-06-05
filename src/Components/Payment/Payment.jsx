import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext, useRef } from "react";
import { MainContext } from "../../Contexts/MainContext";
import emailjs from "emailjs-com";
import Cards from "react-credit-cards-2";
import "./Payment.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Button } from "@mui/material";
const Payment = () => {
  let { id } = useParams();
  const form = useRef();
  const { data, setData } = useContext(MainContext);
  const [temp, setTemp] = useState({});
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setTemp(data.product?.find((value) => value.id == id));
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
    email: "",
  });
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "expiry") {
      const newValue = value
        .replace(/[^\d]/g, "")
        .substring(0, 4)
        .replace(/(\d{2})(\d{2})/, "\$1/\$2");
      const [month, year] = newValue.split("/");
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const enteredDate = new Date(`20${year}`, month - 1);
      const expiryRegex = /^(0[1-9]|1[0-2])\/(2[2-9]|3[0-5])$/;
  
      if (!expiryRegex.test(newValue) || enteredDate < currentDate) {
        setErrors((prev) => ({
          ...prev,
          expiry: "Please enter a valid expiry date",
        }));
      } else {
        setErrors((prev) => ({ ...prev, expiry: "" }));
      }
  
      setState((prev) => ({
        ...prev,
        expiry: newValue,
        month: month,
        year: year,
      }));
    } else if (name === "email") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setState((prev) => ({ ...prev, [name]: value }));
      if (submitted) {
        if (!value || !/\S+@\S+\.\S+/.test(value)) {
          setErrors((prev) => ({
            ...prev,
            email: "Please enter a valid email",
          }));
        } else {
          setErrors((prev) => ({ ...prev, email: "" }));
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
    setState((prev) => ({ ...prev, focused: evt.target.name }));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
      return;
    } else if (hasErrors) {
      alert("Please fix the errors in the form");
      return;
    }
    setSubmitted(true);
    emailjs
      .sendForm(
        "service_courses",
        "template_payment",
        form.current,
        "TSieCXYqsZ-oSOQi3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      <form id="card-form" ref={form} onSubmit={sendEmail}>
        <input
          id="credit-card"
          type="tel"
          name="number"
          placeholder="Card Number"
          pattern="\d{16}"
          maxLength="16"
          value={state.number || ""}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <input
          id="credit-expiry"
          type="text"
          name="expiry"
          placeholder="MM/YY"
          maxLength="5"
          value={state.expiry || ""}
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
          value={state.cvc || ""}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors.cvc && <div className="error">{errors.cvc}</div>}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          maxLength="50"
          value={state.email || ""}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <Button
          id="payment-btn"
          type="submit"
          className="btn btn-primary btn-block"
          value="sendForm"
        >
          Submit payment
        </Button>
        <input
          type="text"
          style={{ display: "none" }}
          name="course"
          defaultValue={temp?.course}
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="price"
          defaultValue={temp?.price}
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="startDate"
          defaultValue={temp?.["start-date"]}
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="endDate"
          defaultValue={temp?.["end-date"]}
        />
      </form>
          {submitted && <p className="submitted">Form submitted successfully!</p>}
          <br />
          <div id="course-details">
            <div id="course-checkout">
              Chosen course: {temp?.course} <br />
              Course starting date: {temp && temp["start-date"]} <br />
              Course ending date: {temp && temp["end-date"]} <br />
              <br />
            </div>
            <div className="form-actions">Course price: {temp?.price}</div>
          </div>
        </div>
      );
    };
    export default Payment;