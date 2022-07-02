import React from 'react';
import { Row, Col, Form, Input } from "antd";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import AOS from "aos";
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../../Redux/Actions/userActions';
import Spinner from '../../../Components/Spinner/Spinner';
AOS.init();

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertReducer);

  function onFinish(values) {
    
    dispatch(userRegister(values));
    console.log(values);
  }
    return (
      <div className="login text-center">
        {loading && <Spinner />}
        <div>
          <Form
            layout="vertical"
            className="login-form p-5"
              onFinish={onFinish}
          >
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="role" label="Role" rules={[{ required: false }]}>
              <Input defaultValue="user" disabled />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Register</button>
            <br />

            <Link to="/login">Click Here to Login</Link>
          </Form>
        </div>
      </div>
    );
};

export default Register;