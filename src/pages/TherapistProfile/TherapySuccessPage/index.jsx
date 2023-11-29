import * as React from "react";
import {
  Button,
  Input,
  Toast,
  Label,
  Text,
  Title1,
  Link as UILink,
} from "@fluentui/react-components";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import { Link } from "react-router-dom";
import "./TherapySuccessPage.css";
import "../../../App.css";
import luna from "../../../assets/luna/love.png";

function TherapySuccessPage() {
  return (
    <div className="container ">
      <div className="therapist-success-page">
        <div className="thank-you">THANKS A MILLION!</div>

        <br></br>
        <br></br>
        <div>
          <img src={luna} href="Luna, your helpful guide" />
        </div>

        <div>
          Thank you for applying as a therapy provider on hopeme. Our team will
          review your application and activate your account in 3 - 5 working
          days to let you know about the status of your application! In the
          meantime, please feel free to setup a user account and familarize
          yourself with our app - your hopeme team.
        </div>

        <br></br>
        <br></br>

        <div>
          <div className="flex-center">
            <Link to={"/therapist/login"} className="link">
              <div className="button-primary">Therapist Login</div>
            </Link>
          </div>

          <br></br>
          <div>
            <Link to="/login" className="link">
              <div className="button-primary">Login as a patient here</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TherapySuccessPage;
