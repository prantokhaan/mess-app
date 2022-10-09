import { Col, Form, Input, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../Components/NavBar/NavBar";
import Spinner from "../../../Components/Spinner/Spinner";
import { addOther } from "../../../Redux/Actions/otherActions";
import ManagerNav from "../ManagerNav/ManagerNav";

const AddOtherCost = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertReducer);

  function onFinish(values) {
    dispatch(addOther(values));
    console.log(values);
  }
  return (
    <div>
      <NavBar />
      <ManagerNav />
      <div className="text-center">
        {loading && <Spinner />}
        <Row justify="center mt-5">
          <Col lg={12} sm={24} xs={24} className="p-2">
            <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
              <h3>Add Other Cost</h3>
              <hr />
              <Form.Item
                name="name"
                label="Bazar Item"
                rules={[{ required: true }]}
              >
                <Input className="px-4 py-2 mb-2" />
              </Form.Item>

              <Form.Item
                name="amount"
                label="Total Amount"
                rules={[{ required: true }]}
                type="number"
              >
                <Input type="number" className="px-4 py-2 mb-2" />
              </Form.Item>
              <Form.Item
                name="date"
                label="Bazar Date"
                rules={[{ required: true }]}
              >
                <Input className="px-4 py-2 mb-2" />
              </Form.Item>
              <Form.Item
                name="person"
                label="Who did the Cost?"
                rules={[{ required: true }]}
              >
                <Input className="px-4 py-2 mb-2" />
              </Form.Item>

              <div className="text-right mt-2">
                <button className="btn1">ADD OTHER COST</button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddOtherCost;
