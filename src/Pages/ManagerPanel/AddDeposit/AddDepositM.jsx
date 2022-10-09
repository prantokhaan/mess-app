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

  

  function onFinish(values) {
    setDepo(values.deposit);
    values._id = members._id;

    dispatch(editMember(values));
    console.log(depo);
  }


  return (
    <div>
      <NavBar />
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          {totalMeal.length > 0 && (
            <div className="text-center">
              <Form
                initialValues={members}
                className="bs1 p-2"
                layout="vertical"
                onFinish={onFinish}
              >
                <h3>
                  Edit Deposit of{" "}
                  <span className="text-capitalize">{members.name}</span>
                </h3>
                <h3>Deposited: {members.deposit} tk</h3>

                <hr />

                <Form.Item
                  name="meal"
                  label=""
                  type="Number"
                  rules={[{ required: true }]}
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
                  label="Deposited"
                  type="Number"
                  rules={[{ required: true }]}
                >
                  <Input type="number" className="inputText" />
                </Form.Item>

                <div className="text-right">
                  <button className="btn1 mt-2">Update</button>
                </div>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AddDepositM;
