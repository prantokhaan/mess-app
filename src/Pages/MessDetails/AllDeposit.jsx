import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllDeposits } from '../../Redux/Actions/depositActions';

const AllDeposit = () => {

    const { deposit } = useSelector((state) => state.depositReducer);
    const { loading } = useSelector((state) => state.alertReducer);
    const [totalDeposit, setTotalDeposit] = React.useState([]);
    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(getAllDeposits());
    }, []);

    React.useEffect(() => {
      setTotalDeposit(deposit);
    }, [deposit]);
    return (
        <div>
            {
                totalDeposit.map(dep => {
                    return (
                      <div>
                        <h2>Pranto Deposit: {dep.prantoD}</h2>
                        <Link to={`/editDeposit/${dep._id}`}>
                          <button>Edit</button>
                        </Link>
                      </div>
                    );
                })
            }
        </div>
    );
};

export default AllDeposit;