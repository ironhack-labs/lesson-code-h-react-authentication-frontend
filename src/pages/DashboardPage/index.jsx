import * as React from "react";
import { Text } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div class="container dashboard">
      <Navbar />

      <Link to="/checkin">
        <Text>How are you feeling today?</Text>
      </Link>

      <Footer />
    </div>
  );
}

export default DashboardPage;
