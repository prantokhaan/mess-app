import React from 'react';
import { Link } from 'react-router-dom';
import useMember from '../../../Hooks/useMember';

const ManagerNav = () => {
    const [member] = useMember();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(member.name)
    return (
      <div style={{ textAlign: "center" }} className="managerNav">
        <div className="manNavList">
          
          <Link to="/cost" style={{ textDecoration: "none" }}>
            <button className="manNavButton">Add Meal Cost</button>
          </Link>
          <Link to="/otherCost" style={{ textDecoration: "none" }}>
            <button className="manNavButton">Add Other Cost</button>
          </Link>
          {user.role === "manager" ? (
            <Link to="/addMember" style={{ textDecoration: "none" }}>
            <button className="manNavButton">Add Member</button>
          </Link>
          ) : <div></div>}

         
        </div>
      </div>
    );
};

export default ManagerNav;