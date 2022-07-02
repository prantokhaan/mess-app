import { Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner';
import { addDeposit } from '../../Redux/Actions/depositActions';

const AllDetails = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertReducer);

    function onFinish(values) {
      values.bookedTimeSlots = [];

      dispatch(addDeposit(values));
      console.log(values);
    }
    return (
      <div>
        {loading && <Spinner />}
        <Row justify="center mt-5">
          <Col lg={12} sm={24} xs={24} className="p-2">
            <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
              <h3>Add Deposits</h3>
              <hr />
              <Form.Item
                name="prantoD"
                label="Pranto Deposit"
                rules={[{ required: true }]}
                type="number"
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                name="farukD"
                label="Faruk Deposit"
                rules={[{ required: true }]}
                type="number"
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                name="opulD"
                label="Opul Deposit"
                rules={[{ required: true }]}
                type="number"
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                name="raselD"
                type="number"
                label="Rasel Deposit"
                rules={[{ required: true }]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                name="mohibullahD"
                label="Mohibullah Deposit"
                type="number"
                rules={[{ required: true }]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                name="kaisedD"
                label="Kaised Deposit"
                type="number"
                rules={[{ required: true }]}
              >
                <Input type="number" />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">ADD CAR</button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    );
};

export default AllDetails;