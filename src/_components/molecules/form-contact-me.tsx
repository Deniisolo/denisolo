"use client";

import { type FormEvent, useRef } from "react";
import { AllSocialMedia } from "./all-social-media";

export function ContactForm() {
  const form = useRef(null);

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    // emailjs
    //   .sendForm("service_omfa4lr", "template_y5w6qqj", form.current, {
    //     publicKey: "VcvGq4s4VbQzddEbZ",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     },
    //   );
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        className="flex w-[450px] flex-col items-center gap-6 overflow-hidden"
        ref={form}
        onSubmit={sendEmail}
      >
        <p className="text-center text-3xl font-light">
          If you are interested in my work, please contact me 👩‍💻
        </p>
        <div className="flex w-full flex-col">
          <label>Name</label>
          <input
            className="rounded-md border bg-gray-100 p-2 outline-none transition focus:border-blue-400"
            type="text"
            name="user_name"
            placeholder="Write your name here..."
          />
        </div>

        <div className="flex w-full flex-col">
          <label>Email</label>
          <input
            className="rounded-md border bg-gray-100 p-2 outline-none transition focus:border-blue-400"
            type="email"
            name="user_email"
            placeholder="Write your email here..."
          />
        </div>

        <div className="flex w-full flex-col">
          <label>Message</label>
          <textarea
            className="rounded-md border bg-gray-100 p-2 outline-none transition focus:border-blue-400"
            name="message"
            placeholder="Write your message here..."
          />
        </div>

        <input
          className="my-10 w-full cursor-pointer rounded-md bg-[#bb99f2] py-4 text-2xl text-white transition hover:bg-[#c0bbff]"
          type="submit"
          value="Send"
        />

        <AllSocialMedia />
      </form>
    </div>
  );
}
