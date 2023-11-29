import { useState } from "react";
import "./TherapistEditProfile.css";
import "../../App.css";

function TherapistEditProfile() {
  return (
    <div>
      <Title1>Edit Your Account Details</Title1>

      <form>
        <div>
          {" "}
          <Label>Email:</Label>
          <Input />
        </div>

        <div>
          <Label>Name:</Label>
          <Input />
        </div>

        <div>
          {" "}
          <Label>Location:</Label>
          <Input />
        </div>

        <div>
          {" "}
          <Label>Price per session:</Label>
          <Input />
        </div>

        <div>
          {" "}
          <Label>Location:</Label>
          <Input />
        </div>

        <div>
          {" "}
          <Label>Languages Spoken:</Label>
          <Input />
        </div>

        <div>
          {" "}
          <Label>Availability:</Label>
          <Input />
        </div>

        <div>
          {" "}
          <Label>Approach:</Label>
          <Input />
        </div>

        <div>
          <Button>Save Changes</Button>
        </div>
      </form>
    </div>
  );
}

export default TherapistEditProfile;
