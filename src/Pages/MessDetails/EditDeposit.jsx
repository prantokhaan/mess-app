import React from 'react';
import { Col, Row, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editDeposit, getAllDeposits } from '../../Redux/Actions/depositActions';
import Spinner from '../../Components/Spinner/Spinner';

const EditDeposit = () => {
     const { deposit } = useSelector((state) => state.depositReducer);
     const dispatch = useDispatch();
     const { loading } = useSelector((state) => state.alertReducer);
     const [deposits, setDeposits] = useState();
     const [totalDeposit, setTotalDeposit] = useState([]);
     const { depId } = useParams();
     useEffect(() => {
       if (deposit.length == 0) {
         dispatch(getAllDeposits());
       } else {
         setTotalDeposit(deposit);
         setDeposits(deposit.find((o) => o._id == depId));
         console.log(deposit);
       }
     }, [deposit]);

     function onFinish(values) {
       values._id = deposits._id;

       dispatch(editDeposit(values));
       console.log(values);
     }

    return (
      <div>
        {loading && <Spinner />}
        <Row justify="center mt-5">
          <Col lg={12} sm={24} xs={24} className="p-2">
            {totalDeposit.length > 0 && (
              <Form
                initialValues={deposits}
                className="bs1 p-2"
                layout="vertical"
                onFinish={onFinish}
              >
                <h3>Edit Car</h3>

                <hr />
                <Form.Item
                  name="prantoD"
                  label="Pranto Deposit"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="farukD"
                  label="Faruk Deposit"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="opulD"
                  label="Opul Deposit"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="raselD" label="Rasel Deposit" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="mohibullahD"
                  label="Mohibullah Deposit"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="kaisedD"
                  label="Kaised Deposit"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                
                <div className="text-right">
                  <button className="btn1">Update</button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </div>
    );
};

export default EditDeposit;