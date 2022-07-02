import React from 'react';
import { Link } from 'react-router-dom';

const MoreDetails = (props) => {
    const {prantoD, farukD, opulD, raselD, mohibullahD, kaisedD, _id} = props.dep;

    const totalDeposit = prantoD + farukD + opulD + raselD + mohibullahD + kaisedD;

    const totalMealCost = 450;

    const messBalance = totalDeposit - totalMealCost;

    const totalMeal = 50;

    const mealRate = totalMealCost / totalMeal;
    return (
      <div className="detailInfo">
        <div className="detailName">
          <h4 className="detailNameItem">Mess Balance - </h4>
          <h4 className="detailNameItem">Total Deposit - </h4>
          <h4 className="detailNameItem">Total Meal - </h4>
          <h4 className="detailNameItem">Total Meal Cost - </h4>
          <h4 className="detailNameItem">Meal Rate - </h4>
          <h4 className="detailNameItem">Other Cost Person - </h4>
        </div>
        <div className="detailStat">
          <h4 className="detailStatItem">{messBalance}</h4>
          <h4 className="detailStatItem">
            {prantoD + farukD + opulD + raselD + mohibullahD + kaisedD}
          </h4>
          <h4 className="detailStatItem">{totalMeal}</h4>
          <h4 className="detailStatItem">{totalMealCost} TK</h4>
          <h4 className="detailStatItem">{mealRate} TK</h4>
          <h4 className="detailStatItem">6000 TK</h4>
        </div>
        
      </div>
    );
};

export default MoreDetails;