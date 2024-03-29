import { message } from "antd";
import axios from "axios";

export const getAllCosts = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get(
      "https://mess-server.cyclic.app/cost/getAllCosts"
    );
    dispatch({ type: "GET_ALL_COSTS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addCost = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("https://mess-server.cyclic.app/cost/addCost", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("New Meal Cost added successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editCost = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("https://mess-server.cyclic.app/cost/editCost", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Meal Cost Updated successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteCost = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("https://mess-server.cyclic.app/cost/deleteCost", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Meal Cost deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
