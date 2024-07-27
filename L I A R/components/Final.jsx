import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Final = ({ conversationState }) => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    scrollToBottom();
  });
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-inherit w-full sm:w-4/5 md:w-[45%] p-4 rounded-lg flex flex-col gap-16 shadow-lg overflow-y-auto flex-grow no-scrollbar">
      {conversationState.map((convo, index) => (
        <div key={index} className="mb-4 flex flex-col gap-6 w-full">
          <div className="flex justify-end">
            <div className="bg-searchBox text-lg text-white p-3 rounded-lg whitespace-pre-wrap max-w-full break-words">
              <p>{convo.prompt}</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-start mt-2">
            <Image
              src={"/logo.svg"}
              alt="icon"
              height={400}
              width={400}
              className="h-8 w-8"
              alt="L I A R"
            />
            <div className="bg-gray-700 text-lg text-white p-3 rounded-lg whitespace-pre-wrap max-w-full break-words">
              <p>{convo.text}</p>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Final;
