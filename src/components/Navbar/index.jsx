import { Button } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn && (
        <>
          <Button onClick={logOutUser}>Logout</Button>
          <span>Welcome, {user && user.name}</span>
        </>
      )}
    </nav>
  );
}

export default Navbar;
