import React from 'react';
import {
  faCartShopping,
  faSackDollar,
  faScaleBalanced,
  faScaleUnbalanced,
  faScaleUnbalancedFlip,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Personal = (props) => {
    const {meal, deposit} = props.m;
    const {mealRate, otherCostPerson} = props;

    const mealCost = (mealRate * meal).toFixed(2);
    const totalCost = (Number(mealCost) + Number(otherCostPerson)).toFixed(2);
    const balance = (deposit - totalCost).toFixed(2);

    return (
      <div className="personalInfo" style={{ textAlign: "center" }}>
        <h2 className="personalTitle">My Billing Info</h2>
        <div className="infoDetail">
          <div className="infoDetailItem">
            <span className="infoIcon">
              <FontAwesomeIcon icon={faUtensils} />
            </span>
            <h2 className="infoStat">{meal}</h2>
            <h3 className="infoName">My Meal</h3>
          </div>
          <div className="infoDetailItem">
            <span className="infoIcon">
              <FontAwesomeIcon icon={faSackDollar} />
            </span>
            <h2 className="infoStat">{deposit}</h2>
            <h3 className="infoName">My Deposit</h3>
          </div>
          <div className="infoDetailItem">
            <span className="infoIcon">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <h2 className="infoStat">{totalCost}</h2>
            <h3 className="infoName">My Cost</h3>
          </div>
          {balance > 0 ? (
            <div className="infoDetailItem">
              <span className="infoIcon">
                <FontAwesomeIcon icon={faScaleUnbalancedFlip} />
              </span>
              <h2 className="infoStat">{balance}</h2>
              <h3 className="infoName">My Balance</h3>
            </div>
          ) : (
            <div className="infoDetailItem">
              <span className="infoIcon2">
                <FontAwesomeIcon icon={faScaleUnbalanced} />
              </span>
              <h2 className="infoStat2">{balance}</h2>
              <h3 className="infoName">My Balance</h3>
            </div>
          )}
        </div>
      </div>
    );
};

export default Personal;