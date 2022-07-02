import { Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../Components/NavBar/NavBar';
import Spinner from '../../../Components/Spinner/Spinner';
import { addCost } from '../../../Redux/Actions/costActions';
import ManagerNav from '../ManagerNav/ManagerNav';

const AddMealCost = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertReducer);

    function onFinish(values) {
      dispatch(addCost(values));
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
                <h3>Add Meal Cost</h3>
                <hr />
                <Form.Item
                  name="name"
                  label="Bazar Item"
                  className="mt-2"
                  rules={[{ required: true }]}
                >
                  <Input className="px-4 py-2 mb-2" />
                </Form.Item>

                <Form.Item
                  name="amount"
                  label="Total Amount"
                  rules={[{ required: true }]}
                  type="number"
                  className="mt-2"
                >
                  <Input type="number" className="px-4 py-2 mb-2" />
                </Form.Item>
                <Form.Item
                  name="date"
                  label="Bazar Date"
                  rules={[{ required: true }]}
                  className="mt-2"
                >
                  <Input className="px-4 py-2 mb-2" />
                </Form.Item>

                <div className="text-right mt-2">
                  <button className="btn1">ADD MEAL COST</button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default AddMealCost;