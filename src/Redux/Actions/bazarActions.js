import { message } from "antd";
import axios from "axios";

export const getAllBazars = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get(
      "https://mess-server.cyclic.app/bazar/getAllBazars"
    );
    dispatch({ type: "GET_ALL_BAZARS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addBazar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("https://mess-server.cyclic.app/bazar/addBazar", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("New Bazar Date added successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editBazar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("https://mess-server.cyclic.app/bazar/editBazar", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Bazar Date Updated successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteBazar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("https://mess-server.cyclic.app/bazar/deleteBazar", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Bazar Date deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
