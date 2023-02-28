import React from 'react';
import useMember from '../../../Hooks/useMember';
import ManagerNav from '../ManagerNav/ManagerNav';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editMember, getAllMembers } from '../../../Redux/Actions/memberActions';
import Spinner from '../../../Components/Spinner/Spinner';
import { Col, Form, Input, Row } from 'antd';
import NavBar from '../../../Components/NavBar/NavBar';
import { addNot, getAllNots } from '../../../Redux/Actions/notActions';

const AddMeal = () => {
    const { member } = useSelector((state) => state.memberReducer);
    const { not } = useSelector((state) => state.notReducer);
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertReducer);
    const [members, setMembers] = React.useState();
    const [nots, setNots] = React.useState();
    const [totalMeal, setTotalMeal] = React.useState([]);
    const { memId } = useParams();


    React.useEffect(() => {
      if (member.length === 0) {
        dispatch(getAllMembers());
        dispatch(getAllNots());
      } else {
        setTotalMeal(member);
        setNots(not);
        setMembers(member.find((o) => o._id == memId));
        
      }
    }, [member, not]);

    
    const data2 = "1 Meal Added to your Account";
    const data3 = "2 Meal Added to your Account";
    const data4 = "Your meal number has edited to " + members?.meal;
    var status = "unseen";
    
    console.log(data2);

     function sendNot(values) {
       dispatch(addNot(values));
     }
     function sendTwoNot(values) {
       dispatch(addNot(values));
     }
     function sendCustomNot(values) {
       dispatch(addNot(values));
     }
    

    function oneMeal(values) {
      values._id = members._id;
      values.meal = members.meal + 1;
      console.log(values);


      dispatch(editMember(values));
      
    }
    function twoMeal(values) {
      values._id = members._id;
      values.meal = members.meal + 2;

      dispatch(editMember(values));
      console.log(values);
    }
    function customMeal(values) {
      values._id = members._id;

      dispatch(editMember(values));
      console.log(values);
    }

   

    let time = new Date();
    console.log(time);

    
    
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
                    onFinish={oneMeal}
                    onClick={sendNot}
                  >
                    <h3>
                      Edit Meal of{" "}
                      <span className="text-capitalize">{members.name}</span>
                    </h3>
                    <h4>Now Meal: {members.meal}</h4>

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
                      <button className="btn1 mt-2">Add One Meal</button>
                    </div>
                  </Form>
                  <Form
                    initialValues={members}
                    className="bs1 p-2"
                    layout="vertical"
                    onFinish={twoMeal}
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
                      <button className="btn1 mt-2">Add Two Meal</button>
                    </div>
                  </Form>
                  <Form
                    initialValues={members}
                    className="bs1 p-2"
                    layout="vertical"
                    onFinish={customMeal}
                  >
                    <Form.Item
                      name="meal"
                      label="Enter Meal Quantity"
                      type="Number"
                      rules={[{ required: true }]}
                      className="inputForm"
                      // initialValue={oldMeal}
                    >
                      <Input type="number" className="inputText" />
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
                      <button className="btn1 mt-2">Add Custom Meal</button>
                    </div>
                  </Form>

                  {/* Notification Part */}

                  {/* First Notification */}
                  <Form
                    className="bs1 p-2"
                    layout="vertical"
                    onFinish={sendNot}
                  >
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
                      initialValue={data2}
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

                  {/* Second Notification  */}
                  <Form
                    className="bs1 p-2"
                    layout="vertical"
                    onFinish={sendTwoNot}
                  >
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
                      initialValue={data3}
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
                      <button className="btn1">Send Notification 2</button>
                    </div>
                  </Form>

                  {/* Third Notification  */}
                  <Form
                    className="bs1 p-2"
                    layout="vertical"
                    onFinish={sendCustomNot}
                  >
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
                      <button className="btn1">Send Notification 3</button>
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

export default AddMeal;