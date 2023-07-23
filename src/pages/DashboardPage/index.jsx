import * as React from "react";
import { Text } from "@fluentui/react-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div class="container dashboard">
      <Navbar />
      <Footer />
    </div>
  );
}

export default DashboardPage;
