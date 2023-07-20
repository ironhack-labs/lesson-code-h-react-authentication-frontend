import * as React from "react";
import { Button, Input } from "@fluentui/react-components";
import { useState, useEffect } from "react";

function HomePage() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:5005/api/completions",
        options
      ); console.log("hello");
      const data = await response.json();
      console.log(response);
      console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <Button>Non-Fiction</Button>
        <div>
          <Button>Fiction</Button>
        </div>
        <div>
          <Button>Self-Help</Button>
        </div>
      </div>
      <div>
        <Input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add some detail"
        />
        <Button onClick={getMessages}>Let's Book!</Button>
      </div>
    </div>
  );
}

export default HomePage;
