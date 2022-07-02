import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner';
import useMember from '../../Hooks/useMember';
import { getAllMembers } from '../../Redux/Actions/memberActions';
import MemberInfo from '../MemberInfo/MemberInfo';

const AllMemberInfo = (props) => {
  const {
    mealRate,
    otherCostPerson,
    otherCost,
    messBalance,
    totalDeposit,
    totalMeal,
    totalMealCost,
    totalMember,
    loading
  } = props;

    

    
   

    return (
      <div className="membersInfo">
        {loading === true && <Spinner />}
        <div className="memberHeading">
          <h2 className="memberTitle">All Member's Info</h2>
          <h4>Total Member: {totalMember.length}</h4>
        </div>
        <div className="memberInfoContainer">
          {totalMember.map((mem) => (
            <MemberInfo
              key={mem._id}
              member={mem}
              mealRate={mealRate}
              otherCostPerson={otherCostPerson}
              otherCost={otherCost}
              messBalance={messBalance}
              totalDeposit={totalDeposit}
              totalMeal={totalMeal}
              totalMealCost={totalMealCost}
            ></MemberInfo>
          ))}
        </div>
      </div>
    );
};

export default AllMemberInfo;