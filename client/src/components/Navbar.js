import { Link } from "react-router-dom";
import { useLogOut } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogOut();
  const { user } = useAuthContext();
  const hanldleLogOut = () => {
    logout();
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>Qestionary </h1>
          </Link>
        </div>

        {user && (
          <div>
            {user.email}
            <button onClick={hanldleLogOut}>LogOut</button>
          </div>
        )}
        {!user && (
          <div className="links">
            <Link to="/signup">
              <h4 className="register">Register </h4>
            </Link>
            <Link to="/login">
              <h4>login </h4>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
