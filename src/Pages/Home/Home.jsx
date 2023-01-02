import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import { getAllCosts } from '../../Redux/Actions/costActions';
import { getAllMembers } from '../../Redux/Actions/memberActions';
import { getAllOthers } from '../../Redux/Actions/otherActions';
import AllMemberInfo from '../AllMemberInfo/AllMemberInfo';
import MessDetails from '../MessDetails/MessDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

const Home = () => {
  const { member } = useSelector((state) => state.memberReducer);
  const { cost } = useSelector((state) => state.costReducer);
  const { other } = useSelector((state) => state.otherReducer);
  const { loading } = useSelector((state) => state.alertReducer);
  const [members, setMembers] = React.useState([]);
  const [costs, setCosts] = React.useState([]);
  const [others, setOthers] = React.useState([]);
  const [totalMember, setTotalMember] = React.useState([]);

  const dispatch = useDispatch();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "kureghor",
    onAfterPrint: () => alert("print successfull")

  })

  React.useEffect(() => {
    dispatch(getAllMembers());
    dispatch(getAllCosts());
    dispatch(getAllOthers());
    dispatch(getAllMembers());
  }, []);

  React.useEffect(() => {
    setMembers(member);
    setCosts(cost);
    setOthers(other);
    setTotalMember(member);
  }, [member, cost, other]);

  let totalMeal = 0;
  let totalDeposit = 0;
  members.forEach((item) => {
    totalMeal = totalMeal + item.meal;
    totalDeposit = totalDeposit + item.deposit;
  });

  let totalMealCost = 0;
  costs.forEach((item) => {
    totalMealCost = totalMealCost + item.amount;
  });

  let otherCost = 0;
  others.forEach(item => {
    otherCost = otherCost + item.amount;
  })

  const otherCostPerson = (otherCost / members.length).toFixed(2);

  const totalCost = (totalMealCost + otherCost).toFixed(2)

  const messBalance = (totalDeposit - totalCost).toFixed(2);
  const mealRate = (totalMealCost / totalMeal).toFixed(2);

const user = JSON.parse(localStorage.getItem("user"));
  
  

  

  

    return (
      <div>
        {user ? (
          <div>
            <NavBar />
            <div ref={componentRef}>
              <MessDetails
                mealRate={mealRate}
                otherCostPerson={otherCostPerson}
                otherCost={otherCost}
                messBalance={messBalance}
                totalDeposit={totalDeposit}
                totalMeal={totalMeal}
                totalMealCost={totalMealCost}
              />
              <PersonalInfo
                totalMember={totalMember}
                mealRate={mealRate}
                otherCostPerson={otherCostPerson}
              />
              <AllMemberInfo
                mealRate={mealRate}
                otherCostPerson={otherCostPerson}
                otherCost={otherCost}
                messBalance={messBalance}
                totalDeposit={totalDeposit}
                totalMeal={totalMeal}
                totalMealCost={totalMealCost}
                totalMember={totalMember}
                loading={loading}
              />
            </div>
            <button onClick={handlePrint}>Print</button>
          </div>
        ) : (
          <div>
            <h2>Login Please</h2>
            <Link to="/login">Login Now</Link>
          </div>
        )}
      </div>
    );
};

export default Home;