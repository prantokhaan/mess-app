import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes,  Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ManagerPanel from './Pages/ManagerPanel/ManagerPanel';
import NavBar from './Components/NavBar/NavBar';
import AddDeposit from './Pages/ManagerPanel/AddDeposit/AddDeposit';
import AddMeal from './Pages/ManagerPanel/AddMeal/AddMeal';
import AddMealCost from './Pages/ManagerPanel/AddMealCost/AddMealCost';
import AddOtherCost from './Pages/ManagerPanel/AddOtherCost/AddOtherCost';

import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import AllDetails from './Pages/AllDetails/AllDetails';
import EditDeposit from './Pages/MessDetails/EditDeposit';
import AllDeposit from './Pages/MessDetails/AllDeposit';
import AddUser from './Pages/ManagerPanel/AddUser/AddUser';
import AddDepositM from './Pages/ManagerPanel/AddDeposit/AddDepositM';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/managerPanel"
            element={
              <PrivateRoute>
                <ManagerPanel />
              </PrivateRoute>
            }
          />
          <Route
            path="/deposit"
            element={
              <PrivateRoute>
                <AddDeposit />
              </PrivateRoute>
            }
          />
          <Route
            path="/meal"
            element={
              <PrivateRoute>
                <AddMeal />
              </PrivateRoute>
            }
          />
          <Route
            path="/cost"
            element={
              <PrivateRoute>
                <AddMealCost />
              </PrivateRoute>
            }
          />
          <Route
            path="/otherCost"
            element={
              <PrivateRoute>
                <AddOtherCost />
              </PrivateRoute>
            }
          />
          <Route
            path="/addMember"
            element={
              <PrivateRoute>
                <ManagerRoute>
                  <AddUser />
                </ManagerRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="/all"
            element={
              <PrivateRoute>
                <AllDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/allDeposit"
            element={
              <PrivateRoute>
                <AllDeposit />
              </PrivateRoute>
            }
          />

          <Route path="/editDeposit/:depId" element={<EditDeposit />} />
          <Route
            path="/addMeal/:memId"
            element={
              <PrivateRoute>
                <ManagerRoute>
                  <AddMeal />
                </ManagerRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="/addDeposit/:memId"
            element={
              <PrivateRoute>
                <AddDepositM />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function PrivateRoute({children}){
  if(localStorage.getItem('user')){
    return children;
  }else{
    return (
      <Navigate to="/login" />
    )
  }


}

export function ManagerRoute({children}){
  const user = JSON.parse(localStorage.getItem("user"));
  
  if(user.role === "manager"){
    return children;
  }else{
    alert("You are not a Manager!");
    return <Navigate to="/" />;
  }
}

