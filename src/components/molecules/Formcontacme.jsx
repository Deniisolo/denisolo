import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "../atoms/Label";
import "./Formcontacme.css";

export function Formcontacme() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_omfa4lr", "template_y5w6qqj", form.current, {
        publicKey: "VcvGq4s4VbQzddEbZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="containerFormcontacme">
      <Label
        laberinformation={
          "If you are interested in my work, please contact me  👩‍💻 "
        }
      />
      <form className="formContainer" ref={form} onSubmit={sendEmail}>
        <label className="labelForm">Name</label>
        <input className="inputForm" type="text" name="user_name" />
        <label className="labelForm">Email</label>
        <input className="inputForm" type="email" name="user_email" />
        <label className="labelForm">Message</label>
        <textarea className="inputFormMessge" name="message" />
        <input className="sendButton" type="submit" value="Send" />
      </form>
    </div>
  );
}
