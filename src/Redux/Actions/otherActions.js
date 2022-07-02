import { message } from "antd";
import axios from "axios";

export const getAllOthers = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get(
      "https://nameless-brushlands-63817.herokuapp.com/other/getAllOthers"
    );
    dispatch({ type: "GET_ALL_OTHERS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addOther = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(
      "https://nameless-brushlands-63817.herokuapp.com/other/addOther",
      reqObj
    );

    dispatch({ type: "LOADING", payload: false });
    message.success("Other Cost added successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editOther = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(
      "https://nameless-brushlands-63817.herokuapp.com/other/editOther",
      reqObj
    );

    dispatch({ type: "LOADING", payload: false });
    message.success("Other Cost Updated successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteOther = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(
      "https://nameless-brushlands-63817.herokuapp.com/other/deleteOther",
      reqObj
    );

    dispatch({ type: "LOADING", payload: false });
    message.success("Other Cost deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
