import { useState } from "react";

function TherapistEditProfile() {
  return (
    <div>
      <Title1>Edit Your Account Details</Title1>

      <form>
        <Label>Email:</Label>
        <Input />

        <Label>Name:</Label>
        <Input />

        <Label>Location:</Label>
        <Input />

        <Label>Price per session:</Label>
        <Input />

        <Label>Location:</Label>
        <Input />

        <Label>Languages Spoken:</Label>
        <Input />

        <Label>Availability:</Label>
        <Input />

        <Label>Approach:</Label>
        <Input />

        <Button>Save Changes</Button>
      </form>
    </div>
  );
}

export default TherapistEditProfile;
