import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">
              Kure <span className="logoPart">Ghor</span>
            </span>
          </Link>

          <div className="navItems">
            {user ? (
              <>
                <Link
                  to="/myProfile"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button className="navButton text-uppercase">{user.username}</button>
                </Link>
                <button
                  className="navButton"
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/login";
                  }}
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button className="navButton">Login</button>
                </Link>
                <Link
                  to="/register"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button className="navButton">Register</button>
                </Link>
              </>
            )}
            <Link to="/managerPanel" style={{ textDecoration: "none" }}>
              <button className="navButton">Panel</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default NavBar;