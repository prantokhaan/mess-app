import { Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Spinner from '../../Components/Spinner/Spinner';
import { editUser, getAllUsers } from '../../Redux/Actions/userActions';

const EditPassword = () => {

    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertReducer);
    const [users, setUsers] = React.useState([]);
    const [totalMeal, setTotalMeal] = React.useState([]);
    const { userId } = useParams();
    React.useEffect(() => {
      if (user.length === 0) {
        dispatch(getAllUsers());
        console.log(user);
      } else {
        setTotalMeal(user);
        setUsers(user.find((o) => o._id == userId));
        
        console.log(user);
      }
    }, [user]);

    function onFinish(values) {
      values._id = users._id;

      dispatch(editUser(values));
    }
    return (
      <div>
        <NavBar />
        {loading && <Spinner />}
        <Row justify="center mt-5">
          <Col lg={12} sm={24} xs={24} className="p-2">
            {totalMeal.length > 0 && (
              <div className="text-center">
                <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
                  <h3>Edit Your Profile</h3>

                  <hr />

                  <Form.Item
                    name="username"
                    label="Username"
                    initialValue={users.username}
                    rules={[{ required: true }]}
                  >
                    <Input disabled className="mb-4 mt-2" />
                  </Form.Item>
                  

                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true }]}
                    initialValue={users.password}
                  >
                    <Input className="mt-2 mb-2" />
                  </Form.Item>

                  <Form.Item
                    name="role"
                    label="User Role"
                    rules={[{ required: true }]}
                    initialValue={users?.role}
                  >
                    <Input className="mt-2" disabled/>
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

export default EditPassword;