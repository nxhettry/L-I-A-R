"use client";
import { useState, useEffect, useRef } from "react";
import Initial from "@/components/Initial";
import Final from "@/components/Final";

// This array will store the conversation between the user and the bot
let conversation = [];

// This function will be called from the messagebox component to store the conversation
export async function getConversation(convo) {
  await conversation.push(convo);
  const event = new CustomEvent("conversationUpdate");
  window.dispatchEvent(event);
}

export default function Home() {
  const [conversationState, setConversationState] = useState([]);

  useEffect(() => {
    // Event listener to update the state when conversation changes
    const handleConversationUpdate = () => {
      setConversationState([...conversation]);
    };

    window.addEventListener("conversationUpdate", handleConversationUpdate);

    // Cleanup event listener
    return () => {
      window.removeEventListener("conversationUpdate", handleConversationUpdate);
    };
  }, []);

  return (
    <div className="h-[83vh] w-screen flex flex-col justify-between items-center">
      {conversationState.length > 0 ? <Final conversationState={conversationState} /> : <Initial />}
    </div>
  );
}
