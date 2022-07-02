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

const AddMeal = () => {
    const { member } = useSelector((state) => state.memberReducer);
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertReducer);
    const [members, setMembers] = React.useState();
    const [totalMeal, setTotalMeal] = React.useState([]);
    const { memId } = useParams();


    React.useEffect(() => {
      if (member.length === 0) {
        dispatch(getAllMembers());
      } else {
        setTotalMeal(member);
        setMembers(member.find((o) => o._id == memId));
        
      }
    }, [member]);

    

    

    function onFinish(values) {
      values._id = members._id;

      dispatch(editMember(values));
      console.log(values);
    }

    
    
    return (
      <div>
        {loading && <Spinner />}
        <NavBar />
        <div className='text-center'>
          <div className='text-center mt-5'>
            <div className="p-2">
              {totalMeal.length > 0 && (
                <div className="text-center">
                  <Form
                    initialValues={members}
                    className="bs1 p-2"
                    layout="vertical"
                    onFinish={onFinish}
                  >
                    <h3>Edit Meal</h3>

                    <hr />

                    <Form.Item
                      name="meal"
                      label="Update Meal"
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
                      rules={[{ required: true }]}
                    >
                      <Input type="number" disabled className="d-none" />
                    </Form.Item>

                    <div className="text-right">
                      <button className="btn1 mt-2">Update</button>
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