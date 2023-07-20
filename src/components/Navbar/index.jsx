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
      <Link to="/">
        <Button>Home</Button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/projects">
            <Button>Projects</Button>
          </Link>

          <Button onClick={logOutUser}>Logout</Button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <Button>Sign Up</Button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <Button>Login</Button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
