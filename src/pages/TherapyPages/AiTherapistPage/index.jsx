import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ReactSVG } from "react-svg";
import back from "../../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import "../../../App.css";
import "./AiTherapistPage.css";
import luna from "../../../assets/luna/welcome.png";
import chat from "../../../assets/luna/breathe.png";
import { Button, Textarea, Image } from "@fluentui/react-components";

function AiTherapistPage() {
  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState([]);

  const handlePrompt = (e) => setPrompt(e.target.value);

  const handlePostReq = async () => {
    const apiURL = process.env.VITE_LIVE_SERVER;
    const url = `${apiURL}/ai-therapist/completions`;
    const storedToken = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        url,
        {
          message: prompt,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setPrompt("");

      const data = response.data;
      const reply = JSON.stringify(data);
      const parsedReply = JSON.parse(reply);

      // Update the conversation state with new prompt and response
      setConversation((prevConversation) => [
        ...prevConversation,
        { text: prompt, sender: "user" },
        { text: parsedReply.choices[0].message, sender: "ai" },
      ]);
      console.log(conversation);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="ai-therapist-container">
        <Link to="/talk">
          <ReactSVG src={back} alt="mood" className="back-link-dark " />
        </Link>

        <div className="ai-chat-1">
          <div>Talk to Luna! Our AI Therapist</div>
          <div>
            <img src={luna} className="ai-chat-luna" />
          </div>
        </div>

        <div className="ai-chat-2">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`ai-message-chat ${
                index % 2 === 0 ? "user-message" : "bot-message"
              }`}
            >
              {index % 2 === 0 ? "Me: " : "Luna: "}{" "}
              {msg.text.content || msg.text}
            </div>
          ))}
        </div>

        <div className="ai-chat-3">
          {" "}
          <Textarea
            className="luna-user-chat"
            onChange={handlePrompt}
            placeholder="Luna is here to listen without judgement, what would you like to say to her?"
          />
        </div>

        <div className="ai-chat-4" onClick={handlePostReq}>
          <Image src={chat} className="luna-send" />
          SEND MESSAGE
          <Image src={chat} className="luna-send" />
        </div>
      </div>
    </div>
  );
}

export default AiTherapistPage;
