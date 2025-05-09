import React from "react";
import "../style/nav.css";
import { BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
// import { useAuth } from "./AuthContext";
import { CgProfile } from "react-icons/cg";
const Nav = () => {
  const { authState, logout } = useAuth();

  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img
              src="./images/OIG_mcR5i1qxke-removebg-preview-transformed.png"
              alt="logo"
            ></img>
            <p className="logo-header">DEALHUB</p>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search"></input>
            <button>Search</button>
          </div>

          <div className="icon">
            <BsBagCheck />
          </div>

          <div className="header">
            <div className="container">
              <div className="nav">
                <ul>
                  <li>
                    <Link to="/" className="link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="link">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="sell" className="link">
                      Sell
                    </Link>
                  </li>
                  <li>
                    <Link to="cart" className="link">
                      Cart
                    </Link>
                  </li>
                  {authState.isAuthenticated ? (
                    <>
                      <li>
                        <span>Welcome, {authState.user?.username}</span>
                      </li>
                      <li className="profile">
                        <Link to="/profile">
                          <CgProfile />
                        </Link>
                      </li>
                      <li>
                        <button onClick={logout} className="logout-btn">
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      {/* <li><Link to="/login">Login</Link></li> */}
                      <li>
                        <Link to="/signup">Sign Up</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
