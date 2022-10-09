import { Col, Form, Input, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../Redux/Actions/userActions';
import Spinner from '../../../Components/Spinner/Spinner';
AOS.init();

const Login = () => {
   const dispatch = useDispatch();
   const { loading } = useSelector((state) => state.alertReducer);
   function onFinish(values) {
     dispatch(userLogin(values));
     console.log(values);
   }
    return (
      <div className="login text-center">
        {loading && <Spinner />}
        <div className="login-inside">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Login</h1>
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
              <Input type="password" />
            </Form.Item>

            <button className="btn1 mt-2">Login</button>

            <hr />

            {/* <Link to="/register">Click Here to Register</Link> */}
          </Form>
        </div>
      </div>
    );
};

export default Login;