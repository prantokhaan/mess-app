import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editMember } from '../../Redux/Actions/memberActions';

const MemberInfo = (props) => {
    let { _id, name, meal, deposit} = props.member;
    const {
      mealRate,
      otherCostPerson,
      otherCost,
      messBalance,
      totalDeposit,
      totalMeal,
      totalMealCost,
    } = props;

    const mealCost = (mealRate * meal).toFixed(2);
    const totalCost = (Number(mealCost) + Number(otherCostPerson)).toFixed(2);
    const balance = (deposit - totalCost).toFixed(2);
    const [updateMeal, setUpdateMeal] = React.useState(meal)
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));

    function upMeal(){
        const values = [
          {
            name: name,
            meal: meal + 1,
            deposit: deposit,
          },
        ];
dispatch(editMember(values));
console.log(values);


        
    }
    return (
      <div className="memberBox">
        <h2 className="memberName">{name}'s Info</h2>
        <hr className="w-50 mx-auto" />
        <div className="memberInfoDetail">
          <div className="memberInfoName">
            <h3 className="memberNameItem">Total Meal - </h3>
            <h3 className="memberNameItem">Meal Cost - </h3>
            <h3 className="memberNameItem">Total Cost - </h3>
            <h3 className="memberNameItem">Total Deposit - </h3>
            <h3 className="memberNameItem">Total Balance - </h3>
          </div>
          <div className="memberInfoStat">
            <h3 className="memberStatItem">{meal}</h3>
            <h3 className="memberStatItem">{mealCost} TK</h3>
            <h3 className="memberStatItem">{totalCost} TK</h3>
            <h3 className="memberStatItem">{deposit} TK</h3>
            <h3 className="memberStatItem">{balance} TK</h3>
          </div>
        </div>
        <hr className="w-50 mx-auto" />
        {user.role === "manager" ? (
          <div>
            <Link to={`addMeal/${_id}`}>
              <button className="memberButton">Add Meal</button>
            </Link>
            <Link to={`addDeposit/${_id}`}>
              <button className="memberButton">Add Deposit</button>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
};

export default MemberInfo;