import * as React from "react";
import { Link } from "react-router-dom";
import { Text, Spinner } from "@fluentui/react-components";
import "./DesignSample.css";
import "../../App.css";
import Loading from "../../components/Loading";

function DesignSamplePage() {
  return (
    <div class="container design-sample">
      <Loading />
    </div>
  );
}

export default DesignSamplePage;
