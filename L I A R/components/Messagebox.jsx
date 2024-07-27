"use client";
import React, { useState } from "react";
import Link from "next/link";
import Alertbox from "@/components/Alertbox";
import { getConversation } from "@/app/page";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Messagebox = () => {
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  //Accessing APi Key
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

  //getting response from the bot
  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = message;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = await response.text();
      return { prompt, text };
    } catch (error) {
      alert("I am unable to answer. Please try again later.");
      console.log(error);
    }
  }

  //onchange
  const handleChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.length > 0) {
      setTyping(true);
    }
  };

  //on Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (message.trim() === "") return;
    const res = await run();
    getConversation(res);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-[95%] md:max-w-3xl mx-auto"
    >
      <div className="relative flex justify-between pl-3 pr-2 h-[3.2rem] items-center w-full bg-searchBox rounded-full">
        <div className="flex items-center h-full w-full gap-3">
          <Link href="/">
            <Alertbox />
          </Link>
          <input
            type="text"
            onChange={handleChange}
            value={message}
            className="bg-inherit text-white text-md rounded-full block h-full w-full"
            placeholder="Message L I A R"
            style={{ outline: "none", boxShadow: "none" }}
            required
          />
        </div>
        <button
          type="submit"
          className={`${
            typing ? "bg-slate-300" : "bg-searchBtn"
          } ms-2 text-sm font-medium rounded-full h-9 w-9 flex justify-center items-center text-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="size-5 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Messagebox;
