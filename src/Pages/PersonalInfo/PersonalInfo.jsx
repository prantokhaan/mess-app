import {
  faCartShopping,
  faSackDollar,
  faScaleBalanced,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Personal from "./Personal";

const PersonalInfo = (props) => {
  const { totalMember, mealRate, otherCostPerson } = props;
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.username;
  return (
    <div>
      {totalMember
        .filter((m) => {
          if (m.name === userName) {
            return m;
          }
        })
        .map((m) => (
          <Personal m={m} mealRate={mealRate} otherCostPerson={otherCostPerson} />
        )
          
        )}
    </div>
  );
};

export default PersonalInfo;
