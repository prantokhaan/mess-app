import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner';
import { getAllCosts } from '../../Redux/Actions/costActions';
import { getAllMembers } from '../../Redux/Actions/memberActions';
import MoreDetails from './MoreDetails';

const MessDetails = (props) => {
  const { mealRate, otherCostPerson, otherCost, messBalance, totalDeposit, totalMeal, totalMealCost } = props;
  

   

   
 
    return (
      <div className="messDetails" style={{ textAlign: "center" }}>
        <div className="detailInfo p-3 pt-4">
          <div className="detailName">
            <h4 className="detailNameItem">Mess Balance - </h4>
            <h4 className="detailNameItem">Total Deposit - </h4>
            <h4 className="detailNameItem">Total Meal - </h4>
            <h4 className="detailNameItem">Total Meal Cost - </h4>
            <h4 className="detailNameItem">Meal Rate - </h4>
            <h4 className="detailNameItem">Total Other Cost - </h4>
            <h4 className="detailNameItem detailNameItemExtra">Other Cost Person - </h4>
          </div>
          <div className="detailStat">
            <h4 className="detailStatItem">{messBalance} tk</h4>
            <h4 className="detailStatItem">{totalDeposit} tk</h4>
            <h4 className="detailStatItem">{totalMeal}</h4>
            <h4 className="detailStatItem">{totalMealCost} TK</h4>
            <h4 className="detailStatItem">{mealRate} TK</h4>
            <h4 className="detailStatItem">{otherCost} TK</h4>
            <h4 className="detailStatItem">{otherCostPerson} TK</h4>
          </div>
        </div>

        {/* {loading === true && <Spinner />}
        <h1 className="detailsHeader">Kure Ghor Details</h1>
        <h4 className="monthName">June 2022</h4>

        {totalDeposit.map((dep) => (
          <MoreDetails key={dep._id} dep={dep}></MoreDetails>
        ))} */}
      </div>
    );
};

export default MessDetails;