import { DeleteOutlined } from '@ant-design/icons';
import { Col, Popconfirm, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../Components/NavBar/NavBar';
import Spinner from '../../../Components/Spinner/Spinner';
import { deleteCost, getAllCosts } from '../../../Redux/Actions/costActions';
import { deleteOther, getAllOthers } from '../../../Redux/Actions/otherActions';
import ManagerNav from '../ManagerNav/ManagerNav';

const BazarHistory = () => {
  const user = JSON.parse(localStorage.getItem("user"));
    const { cost } = useSelector((state) => state.costReducer);
    const { other } = useSelector((state) => state.otherReducer);
    const { loading } = useSelector((state) => state.alertReducer);
    const [costs, setCosts] = React.useState([]);
    const [others, setOthers] = React.useState([]);
    const dispatch = useDispatch();

     React.useEffect(() => {
       dispatch(getAllCosts());
       dispatch(getAllOthers());
     }, []);

     React.useEffect(() => {
        setCosts(cost);
        setOthers(other);
     }, [cost, other]);

     
     
    return (
      <div>
        <NavBar />
        <ManagerNav />

        <div className="text-center">
          {loading && <Spinner />}
          <h3 className="mt-5">Bazar History</h3>
          <hr />
          <Row justify="center mt-5">
            {cost.sort((a,b) => (a.createdAt < b.createdAt) ?1 : -1).map((c) => {
              return (
                <Col lg={12} sm={24} xs={24} className="p-2">
                  <div className="costHistory">
                    <h4>{c.name}</h4>
                    <hr className="w-50 mx-auto" />
                    <h5>{c.amount} tk</h5>
                    <hr className="w-50 mx-auto" />
                    <h5>Date: {c.createdAt.slice(0, 10)}</h5>
                    <hr className="w-50 mx-auto" />
                    <h5 className="text-capitalize">By: {c.bazarPerson}</h5>
                    <hr className="w-50 mx-auto" />
                    {user.role === 'manager' ? <button
                      className="delButton"
                      onClick={() => {
                        dispatch(deleteCost({ costId: c._id }));
                      }}
                    >
                      Delete
                    </button> : <div></div>}
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="text-center">
          {loading && <Spinner />}
          <h3 className="mt-5">Other Cost History</h3>
          <hr />
          <Row justify="center mt-5">
            {other.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1).map((c) => {
              return (
                <Col lg={12} sm={24} xs={24} className="p-2">
                  <div className="costHistory">
                    <h4>{c.name}</h4>
                    <hr className="w-50 mx-auto" />
                    <h5>{c.amount} tk</h5>
                    <hr className="w-50 mx-auto" />
                    <h5>Date: {c.createdAt.slice(0, 10)}</h5>
                    <hr className="w-50 mx-auto" />
                    <h5 className="text-capitalize">By: {c.person}</h5>
                    <hr className="w-50 mx-auto" />
                    {user.role === "manager" ? (
                      <button
                        className="delButton"
                        onClick={() => {
                          dispatch(deleteOther({ otherId: c._id }));
                        }}
                      >
                        Delete
                      </button>
                    ) : (
                      <div></div>
                    )}
                    {/* <button
                      className="delButton"
                      onClick={() => {
                        dispatch(deleteOther({ otherId: c._id }));
                      }}
                    >
                      Delete
                    </button> */}
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
};

export default BazarHistory;