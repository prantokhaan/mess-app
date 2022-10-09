import React from 'react';
import { Link } from 'react-router-dom';
import useMember from '../../../Hooks/useMember';

const ManagerNav = () => {
    const [member] = useMember();
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <div style={{ textAlign: "center" }} className="managerNav">
        <div className="manNavList">
          <Link to="/cost" style={{ textDecoration: "none" }}>
            <button className="manNavButton">Add Meal Cost</button>
          </Link>
          <Link to="/otherCost" style={{ textDecoration: "none" }}>
            <button className="manNavButton">Add Other Cost</button>
          </Link>
          <br />
          <Link to="/bazarHistory" style={{ textDecoration: "none" }}>
            <button className="manNavButton">Bazar History</button>
          </Link>
          <Link to="/showBazarDates" style={{ textDecoration: "none" }}>
            <button className="manNavButton">Show Bazar Dates</button>
          </Link>
          {user.role === "manager" ? (
            <>
              <Link to="/addMember" style={{ textDecoration: "none" }}>
                <button className="manNavButton">Add Member</button>
              </Link>
              <Link to="/bazarDates" style={{ textDecoration: "none" }}>
                <button className="manNavButton">Add Date of Bazar</button>
              </Link>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
};

export default ManagerNav;