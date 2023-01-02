import React from 'react';
import { Link } from 'react-router-dom';
import { faBell, faCartShopping, faCircleInfo, faLeaf, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { getAllNots } from '../../Redux/Actions/notActions';

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { not } = useSelector((state) => state.notReducer);
  const { loading } = useSelector((state) => state.alertReducer);
  const [nots, setNots] = React.useState([]);
  const dispatch = useDispatch();
  const [visited, setVisited] = React.useState(false);

  React.useEffect(() => {
    dispatch(getAllNots());
  }, []);

  React.useEffect(() => {
    setNots(not);
  }, [not]);

  let length = 0;
  {
    nots.filter((c) => {
      if (c.name === user.username) {
        length++;
      }
    });
  }

  let pranto = false;
  let sakib = false;
  let kaised = false;
  let tasnimur = false;
  let rakesh = false;
  let hurayra = false;
  let tibro = false;
  function isClicked(){
      if (user.username === "Pranto") {
        pranto = true;
      } else if (user.username === "sakib") {
        sakib = true;
      } else if (user.username === "kaised") {
        kaised = true;
      } else if (user.username === "tasnimur") {
        tasnimur = true;
      } else if (user.username === "rakesh") {
        rakesh = true;
      } else if (user.username === "hurayra") {
        hurayra = true;
      } else if (user.username === "tibro") {
        tibro = true;
      }
  }
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
                  <button className="navButton text-uppercase">
                    {user.username}
                  </button>
                </Link>
                <button
                  className="navButton"
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/login";
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
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
            {user.username === "Pranto" ? (
              <Link to="/notifications" style={{ textDecoration: "none" }}>
                <button type="button" class="navButton position-relative" onClick={isClicked}>
                  <FontAwesomeIcon icon={faBell} />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {nots.length}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
              </Link>
            ) : (
              <Link to="/notifications" style={{ textDecoration: "none" }}>
                <button type="button" class="navButton position-relative">
                  <FontAwesomeIcon icon={faBell} />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {length}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
              </Link>
            )}
            <Link to="/managerPanel" style={{ textDecoration: "none" }}>
              <button className="navButton">
                <FontAwesomeIcon icon={faCircleInfo} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default NavBar;