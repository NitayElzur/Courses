import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../Contexts/MainContext";
import emailjs from "emailjs-com";
import Cards from "react-credit-cards-2";
import "./Payment.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Button } from "@mui/material";

const Payment = () => {
  let { id } = useParams();
  const form = useRef();
  const { data, setData } = useContext(MainContext);;
  const [temp, setTemp] = useState({})
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  

  useEffect(() => {
    setTemp(data.product?.find(value => value.id == id))
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
      const [month, year] = value.split("/");
      setState((prev) => ({
        ...prev,
        expiry: value,
        month: month,
        year: year,
      }));
    } else if (name === "email") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setState((prev) => ({ ...prev, [name]: value }));
      if (submitted) {
        if (!value || !/\S+@\S+\.\S+/.test(value)) {
          setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
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
          name: firstName && lastName ? "" : "Please enter both first and last name",
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
      return;
    }

    if (hasErrors) {
      alert("Please fix the errors in the form");
      return;
    }

    setSubmitted(true);

    emailjs
      .sendForm("service_courses", "template_payment", form.current, "TSieCXYqsZ-oSOQi3" )
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
      <form id="card-form" ref={form} onSubmit={handleSubmit}>
        <br />
        <br />
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
        {errors.number && <div className="error">{errors.number}</div>}
        <input
          id="credit-owner"
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[A-Za-z\s]+$"
          maxLength="25"
          value={state.name || ""}
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
      </form>
      {submitted && <p className="submitted">Form submitted successfully!</p>}
      <br />
      <div id="course-details">
        <div id="course-checkout">
          Chosen course: {temp?.course} <br />
          Course starting date: {temp && temp['start-date']} <br />
          Course starting date: {temp && temp['end-date']} <br />
          <br />
        </div>
        <div className="form-actions">Course price: {temp?.price}</div>
      </div>
    </div>
  );
};

export default Payment;
