import * as React from "react";
import { Button, Input } from "@fluentui/react-components";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");

  const handlePostReq = () => {
    const url = "http://localhost:5005/api/completions";
    const storedToken = localStorage.getItem("authToken");
    axios
      .post(
        url,
        {
          message: prompt,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };

  // const getMessages = async () => {
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       message: prompt,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const response = await fetch(
  //       "http://localhost:5005/api/completions",
  //       options
  //     );
  //     console.log("hello");
  //     const data = await response.json();
  //     console.log(response);
  //     console.log(data);
  //     setMessage(data.choices[0].message);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div class="container homepage">
      <div class="homepage-1">
        <img src={logo} alt="HopeMe Logo" />
      </div>
      <div>
        <Input
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Add some detail"
        />
        <Button onClick={handlePostReq}>Let's Book!</Button>
      </div>
    </div>
  );
}

export default HomePage;
