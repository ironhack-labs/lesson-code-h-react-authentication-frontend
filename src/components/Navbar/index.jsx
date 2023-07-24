import { Button } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import logout from "../../assets/icons/light/logout.png";
import "./Navbar.css";
import "../../App.css";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {isLoggedIn && (
        <div className="navbar-1">
          <div> {user.name}'s hopeme Dashboard</div>
          <div onClick={logOutUser} className="button-logout">
            <Link to="/">
              <img src={logout} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
