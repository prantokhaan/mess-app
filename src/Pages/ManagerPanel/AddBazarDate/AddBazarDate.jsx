import { Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../Components/NavBar/NavBar';
import Spinner from '../../../Components/Spinner/Spinner';
import { addBazar } from '../../../Redux/Actions/bazarActions';
import ManagerNav from '../ManagerNav/ManagerNav';

const AddBazarDate = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertReducer);

    function onFinish(values) {
      dispatch(addBazar(values));
      console.log(values);
    }
    return (
      <div className="text-center">
        <NavBar />
        <ManagerNav />
        <div className="text-center">
          {loading && <Spinner />}
          <Row justify="center mt-5">
            <Col lg={12} sm={24} xs={24} className="p-2">
              <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
                <h3>Add Bazar Dates</h3>
                <hr />
                <Form.Item
                  name="name"
                  label="Who will do the bazar"
                  rules={[{ required: true }]}
                >
                  <Input className="px-4 py-2 mb-2" />
                </Form.Item>

              
                <Form.Item
                  name="date"
                  label="Date of Bazar"
                  rules={[{ required: true }]}
                >
                  <Input className="px-4 py-2 mb-2" />
                </Form.Item>

                <div className="text-right mt-2">
                  <button className="btn1">ADD BAZAR DATE</button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default AddBazarDate;