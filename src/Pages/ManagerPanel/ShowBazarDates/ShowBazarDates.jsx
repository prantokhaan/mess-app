import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../Components/NavBar/NavBar';
import Spinner from '../../../Components/Spinner/Spinner';
import { deleteBazar, getAllBazars } from '../../../Redux/Actions/bazarActions';
import ManagerNav from '../ManagerNav/ManagerNav';

const ShowBazarDates = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { bazar } = useSelector((state) => state.bazarReducer);
    const { loading } = useSelector((state) => state.alertReducer);
    const [bazars, setBazars] = React.useState([]);
    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(getAllBazars());
    }, []);

    React.useEffect(() => {
      setBazars(bazar);
    }, [bazar]);

    
    return (
      <div>
        <NavBar />
        <ManagerNav />
        <div className="text-center">
          {loading && <Spinner />}
          <h3 className="mt-5">Dates of Bazar</h3>
          <hr />
          <Row justify="center mt-5">
            {bazars.sort((a,b) => (a.date > b.date) ? 1 : -1).map((c) => {
              return (
                <Col lg={12} sm={24} xs={24} className="p-2">
                  <div className="bazarHistory">
                    <h4>{c.name}</h4>
                    <hr className="w-50 mx-auto" />
                    <h5>Date: {c.date}</h5>
                    <hr className="w-50 mx-auto" />
                    {user.role === "manager" ? (
                      <button
                        className="delButton"
                        onClick={() => {
                          dispatch(deleteBazar({ bazarId: c._id }));
                        }}
                      >
                        Delete
                      </button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
};

export default ShowBazarDates;