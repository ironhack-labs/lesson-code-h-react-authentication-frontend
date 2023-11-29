import { Spinner } from "@fluentui/react-components";
import "../../App.css";

function Loading() {
  return (
    <div className="container loading">
      <Spinner size="huge" />
    </div>
  );
}

export default Loading;
