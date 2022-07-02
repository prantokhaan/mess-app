import { message } from "antd";
import axios from "axios";

export const getAllDeposits = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get(
      "https://nameless-brushlands-63817.herokuapp.com/deposit/getAllDeposits"
    );
    dispatch({ type: "GET_ALL_DEPOSITS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addDeposit = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(
      "https://nameless-brushlands-63817.herokuapp.com/deposit/addDeposit",
      reqObj
    );

    dispatch({ type: "LOADING", payload: false });
    message.success("New Deposit added successfully");
    setTimeout(() => {
      window.location.href = "/allDetails";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editDeposit = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(
      "https://nameless-brushlands-63817.herokuapp.com/deposit/editDeposit",
      reqObj
    );

    dispatch({ type: "LOADING", payload: false });
    message.success("Deposit updated successfully");
    setTimeout(() => {
      window.location.href = "/allDeposit";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

// export const deleteCar = (reqObj) => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true });

//   try {
//     await axios.post("/cars/deleteCar", reqObj);

//     dispatch({ type: "LOADING", payload: false });
//     message.success("Car deleted successfully");
//     setTimeout(() => {
//       window.location.reload();
//     }, 500);
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "LOADING", payload: false });
//   }
// };
