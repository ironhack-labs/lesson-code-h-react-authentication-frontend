import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./AiTherapistPage.css";
import luna from "../../assets/luna/welcome.png";
import chat from "../../assets/luna/breathe.png";
import { Button, Textarea, Image } from "@fluentui/react-components";

function AiTherapistPage() {
  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState([]);

  const handlePrompt = (e) => setPrompt(e.target.value);

  const handlePostReq = async () => {
    const url = "http://localhost:5005/ai-therapist/completions";
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
    <div className="container aitherapist">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>
      <div>
        <h1>Talk to Luna, our AI assistant</h1>
      </div>
      <div>
        <img src={luna} />
      </div>
      <div className="conversation">
        {conversation.map((msg, index) => (
          <div key={index}>{msg.text.content || msg.text}</div>
        ))}
      </div>
      <div>
        <Textarea onChange={handlePrompt} placeholder="Start talking with Luna" />
        <Button onClick={handlePostReq}>
          <Image src={chat} />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default AiTherapistPage;
