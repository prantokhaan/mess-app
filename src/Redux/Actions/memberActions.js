import { message } from "antd";
import axios from "axios";

export const getAllMembers = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get(
      "https://nameless-brushlands-63817.herokuapp.com/member/getAllMembers"
    );
    dispatch({ type: "GET_ALL_MEMBERS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addMember = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(
      "https://nameless-brushlands-63817.herokuapp.com/member/addMember",
      reqObj
    );

    dispatch({ type: "LOADING", payload: false });
    message.success("New Member added successfully");
    setTimeout(() => {
      window.location.href = "/addMember";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editMember = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(
      "https://nameless-brushlands-63817.herokuapp.com/member/editMember",
      reqObj
    );

    dispatch({ type: "LOADING", payload: false });
    message.success("Updated successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteMember = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(
      "https://nameless-brushlands-63817.herokuapp.com/member/deleteMember",
      reqObj
    );

    dispatch({ type: "LOADING", payload: false });
    message.success("Member deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
