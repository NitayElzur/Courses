import "./ContactUs.css";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function ContactUs() {
  const {register,formState: { errors },handleSubmit,reset} = useForm();
  const form = useRef();
  function onSubmit(formData){  
    emailjs.send('service_courses', 'template_course', formData, 'TSieCXYqsZ-oSOQi3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };
  return (
    <div id="contactMain">
      <form id="contactForm" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="bigFormText">Contact Us</div>
        <div className="normalFormText">
          {errors && Object.values(errors).length > 0
            ? Object.values(errors)[0]?.message
            : `So we can keep you up to date!`}
        </div>
        <div id="contactFormNames">
          <input
            placeholder="First Name"
            className="contactFormInput"
            type="text"
            name="firstName"
            {...register("firstName", { required: "First Name is required" })}
          />
          <input
            className="contactFormInput"
            placeholder="Last Name"
            type="text"
            name="lastName"
            {...register("lastName", { required: "Last Name is required" })}
          />
        </div>
        <input
          className="contactFormInput"
          type="email"
          placeholder="Your Email Address"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /.+@.+/,
              message: "Email must contain text before and after a @",
            },
          })}
        />
        <button type="submit" id="contactFormButton" value="sendForm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;