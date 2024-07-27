"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Drawer = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setDrawerIsOpen(!drawerIsOpen);
        },
        (error) => {
          alert("Failed to send message, try again later");
          console.error(error);
        }
      );
  };

  return (
    <>
      <div className={` text-center text-white  z-30`}>
        <button
          onClick={() => setDrawerIsOpen(!drawerIsOpen)}
          className="text-white font-medium rounded-lg text-sm"
          type="button"
          data-drawer-target="drawer-contact"
          data-drawer-show="drawer-contact"
          aria-controls="drawer-contact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 6.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="drawer-contact"
        className={`${
          drawerIsOpen
            ? "flex flex-col items-center justify-start "
            : "hidden"
        } fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform transform bg-black w-80`}
        aria-labelledby="drawer-contact-label"
      >
        <h5
          id="drawer-contact-label"
          className="inline-flex items-center mb-6 text-base font-semibold  uppercase"
        >
          <svg
            className="w-4 h-4 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
          </svg>
          Contact us
        </h5>
        <button
          type="button"
          onClick={() => setDrawerIsOpen(!drawerIsOpen)}
          className="text-gray-400 text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center "
          aria-controls="drawer-contact"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <form ref={form} onSubmit={sendEmail} className="mb-6 w-full">
          <div className="mb-6 w-full flex flex-col items-center justify-center">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              id="email"
              className="bg-searchBox border text-sm rounded-lg  block w-full p-2.5 "
              placeholder="john@gmail.com"
              required={true}
              type="email"
              name="from_name"
              style={{ outline: "none", boxShadow: "none" }}
            />
          </div>
          <div className="mb-6 flex flex-col justify-center items-center">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium "
            >
              Your message
            </label>
            <textarea
              id="message"
              required={true}
              rows="4"
              name="message"
              style={{ outline: "none", boxShadow: "none" }}
              className="block p-2.5 border w-full text-sm  bg-searchBox rounded-lg "
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white hover:bg-slate-500 bg-searchBtn w-full font-medium rounded-lg text-sm px-5 py-2.5 mb-2 block"
          >
            Send message
          </button>
        </form>
        <p className="mb-2 text-sm ">
          <a
            className="hover:underline"
            target="_blank"
            href="https://www.linkedin.com/in/nissan-gtsn-085442291/"
          >
            nishan.gtsn@gmail.com
          </a>
        </p>
        <p className="text-sm ">Copyright Nxhettry @ 2024</p>
      </div>
    </>
  );
};

export default Drawer;
