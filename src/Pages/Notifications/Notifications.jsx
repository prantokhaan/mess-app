import { faBedPulse } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import Spinner from '../../Components/Spinner/Spinner';
import { deleteNot, editNot, getAllNots } from '../../Redux/Actions/notActions';

const Notifications = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { not } = useSelector((state) => state.notReducer);
    const { loading } = useSelector((state) => state.alertReducer);
    const [nots, setNots] = React.useState([]);
    const [mem, setMem] = React.useState([]);
    const [data, setData] = React.useState(" ");
    const [name, setName] = React.useState(" ");
    const [stat, setStat] = React.useState(" ");
    const [id, setId] = React.useState(" ");
    const dispatch = useDispatch();
    const [status, setStatus] = React.useState(["seen"]);

    React.useEffect(() => {
      dispatch(getAllNots());
    }, []);

    React.useEffect(() => {
      setNots(not);
    }, [not]);
    let month2;
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let length = 0;
    var i=0;

    var st = "seen";

    var nice = [];

      const handleStatusUpdate = (id) => {
         nice[i] = id;
         i++;
         
         
      };

      
      console.log(nice[0]);
    return (
      <div>
        <NavBar />
        <div className="text-center">
          {loading && <Spinner />}
          <h3 className="mt-5 text-capitalize">
            notifications of {user.username}
          </h3>
          
          <hr />
          {user.username === "Pranto" ? (
            <Row justify="center mt-5">
              {nots
                .sort((a, b) => (a.date > b.date ? 1 : -1))
                .map((c) => {
                  let m = c.createdAt.slice(5, 7);
                  month2 = month[m - 1];
                  return (
                    <Col
                      lg={12}
                      sm={24}
                      xs={24}
                      className="p-2"
                      onClick={() => handleStatusUpdate(c._id)}
                    >
                      <div className="bazarHistory">
                        <h5>{c.data}</h5>

                        <hr className="w-50 mx-auto" />
                        <h5>
                          {c.createdAt.slice(8, 10)} {month2}
                        </h5>
                        <hr className="w-50 mx-auto" />
                        <h5 className="text-capitalize">{c.name}</h5>
                        <button
                          className="delButton mt-2"
                          onClick={() => {
                            dispatch(deleteNot({ notId: c._id }));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          ) : (
            <Row justify="center mt-5">
              {nots
                .filter((c) => {
                  if (c.name === user.username) {
                    return c;
                  }
                })
                .sort((a, b) => (a.date > b.date ? 1 : -1))
                .map((c) => {
                  let m = c.createdAt.slice(5, 7);
                  month2 = month[m - 1];
                  return (
                    <Col lg={12} sm={24} xs={24} className="p-2">
                      <div className="bazarHistory">
                        <h5>{c.data}</h5>
                        <h5>{c.length}</h5>
                        <hr className="w-50 mx-auto" />
                        <h5>
                          {c.createdAt.slice(8, 10)} {month2}
                        </h5>
                        <hr className="w-50 mx-auto" />
                        <h5 className="text-capitalize">{c.name}</h5>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          )}
        </div>
      </div>
    );
};

export default Notifications;