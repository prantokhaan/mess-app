import React from "react";
import useMember from "../../../Hooks/useMember";
import ManagerNav from "../ManagerNav/ManagerNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  editMember,
  getAllMembers,
} from "../../../Redux/Actions/memberActions";
import Spinner from "../../../Components/Spinner/Spinner";
import { Col, Form, Input, Row } from "antd";
import NavBar from "../../../Components/NavBar/NavBar";
import { addNot } from "../../../Redux/Actions/notActions";

const AddDepositM = () => {
  const { member } = useSelector((state) => state.memberReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertReducer);
  const [members, setMembers] = React.useState();
  const [totalMeal, setTotalMeal] = React.useState([]);
  const [depo, setDepo] = React.useState(0);
  const { memId } = useParams();
  const [d, setD] = React.useState(0)
  React.useEffect(() => {
    if (member.length == 0) {
      dispatch(getAllMembers());
    } else {
      setTotalMeal(member);
    
      setMembers(member.find((o) => o._id == memId));
      console.log(member);
    }
  }, [member]);

const data2 = "1 Meal Added to your Account";
const data3 = "2 Meal Added to your Account";
const data4 = "Your Deposit has edited to " + members?.deposit;
var status = "unseen";
console.log(data2);


  function fiveTaka(values){
    values._id = members._id;
    values.deposit = members.deposit + 500;

    dispatch(editMember(values));
  }

  function thousandTaka(values) {
    values._id = members._id;
    values.deposit = members.deposit + 1000;

    dispatch(editMember(values));
  }
  

  function customTaka(values) {
    setDepo(values.deposit);
    values._id = members._id;

    dispatch(editMember(values));
    console.log(depo);
  }

  function sendNot(values) {
    dispatch(addNot(values));
  }


  return (
    <div>
      {loading && <Spinner />}
      <NavBar />
      <div className="text-center">
        <div className="text-center mt-5">
          <div className="p-2">
            {totalMeal.length > 0 && (
              <div className="text-center">
                <Form
                  initialValues={members}
                  className="bs1 p-2"
                  layout="vertical"
                  onFinish={fiveTaka}
                  onClick={sendNot}
                >
                  <h3>
                    Edit Deposit of{" "}
                    <span className="text-capitalize">{members.name}</span>
                  </h3>
                  <h4>Current Deposit: {members.deposit}</h4>

                  <hr />

                  <Form.Item
                    name="meal"
                    label=""
                    type="Number"
                    rules={[{ required: true }]}
                    className="inputForm d-hidden"
                    // initialValue={oldMeal}
                  >
                    <Input
                      type="number"
                      className="inputText d-none disabled"
                    />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    label=""
                    className="d-hidden"
                    rules={[{ required: true }]}
                  >
                    <Input disabled className="d-none" />
                  </Form.Item>
                  <Form.Item
                    name="deposit"
                    label=""
                    type="Number"
                    className="d-hidden"
                    rules={[{ required: true }]}
                  >
                    <Input type="number" disabled className="d-none" />
                  </Form.Item>

                  <div className="text-right">
                    <button className="btn1 mt-2">500</button>
                  </div>
                </Form>
                <Form
                  initialValues={members}
                  className="bs1 p-2"
                  layout="vertical"
                  onFinish={thousandTaka}
                >
                  <Form.Item
                    name="meal"
                    label=""
                    type="Number"
                    rules={[{ required: true }]}
                    className="inputForm d-hidden"
                    // initialValue={oldMeal}
                  >
                    <Input
                      type="number"
                      className="inputText d-none disabled"
                    />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    label=""
                    className="d-hidden"
                    rules={[{ required: true }]}
                  >
                    <Input disabled className="d-none" />
                  </Form.Item>
                  <Form.Item
                    name="deposit"
                    label=""
                    type="Number"
                    className="d-hidden"
                    rules={[{ required: true }]}
                  >
                    <Input type="number" disabled className="d-none" />
                  </Form.Item>

                  <div className="text-right">
                    <button className="btn1 mt-2">1000</button>
                  </div>
                </Form>
                <Form
                  initialValues={members}
                  className="bs1 p-2"
                  layout="vertical"
                  onFinish={customTaka}
                >
                  <Form.Item
                    name="meal"
                    label="Enter Deposit Amount"
                    type="Number"
                    rules={[{ required: true }]}
                    className="inputForm"
                    // initialValue={oldMeal}
                  >
                    <Input type="number" disabled className="d-none" />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    label=""
                    className="d-hidden"
                    rules={[{ required: true }]}
                  >
                    <Input disabled className="d-none" />
                  </Form.Item>
                  <Form.Item
                    name="deposit"
                    label=""
                    type="Number"
                    className="d-hidden"
                    rules={[{ required: true }]}
                  >
                    <Input type="number" className="inputText" />
                  </Form.Item>

                  <div className="text-right">
                    <button className="btn1 mt-2">Deposit</button>
                  </div>
                </Form>

                {/* Notification Part */}

                {/* First Notification */}
                <Form className="bs1 p-2" layout="vertical" onFinish={sendNot}>
                  <Form.Item
                    name="name"
                    label=""
                    initialValue={members.name}
                    rules={[{ required: true }]}
                    className="d-hidden"
                  >
                    <Input className="px-4 py-2 mb-2 d-none" />
                  </Form.Item>
                  <Form.Item
                    name="data"
                    label=""
                    initialValue={data4}
                    rules={[{ required: true }]}
                  >
                    <Input className="px-4 py-2 mb-2 d-none" />
                  </Form.Item>
                  <Form.Item
                    name="status"
                    label=""
                    initialValue={status}
                    rules={[{ required: true }]}
                  >
                    <Input className="px-4 py-2 mb-2 d-none" />
                  </Form.Item>

                  <div className="text-right mt-2">
                    <button className="btn1">Send Notification 1</button>
                  </div>
                </Form>

               
               

                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepositM;
