import * as React from "react";
import { Button, Input } from "@fluentui/react-components";

function HomePage() {
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
        <Input placeholder="Add some detail" />
        <Button>Let's Book!</Button>
      </div>
    </div>
  );
}

export default HomePage;
