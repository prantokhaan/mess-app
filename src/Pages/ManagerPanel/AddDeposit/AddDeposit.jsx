import React from 'react';
import useMember from '../../../Hooks/useMember';
import ManagerNav from '../ManagerNav/ManagerNav';

const AddDeposit = () => {
    const [member] = useMember();
    
    return (
        <div style={{textAlign: "center"}}>
            <ManagerNav />
            <div className="depositSec">
                <h2 className="depTitle">
                    Add Deposit to Member's Account
                </h2>
                <h4 className="depTotal">
                    Total Deposit: 5000
                </h4>
                <hr />
                <div>
                    {
                        member.map(m => <div>
                            <div className="depGrid">
                                <h4>{m.name}</h4>
                                <h4>Deposited: {m.deposit} tk</h4>
                                <input type="text"  className='depInput' />
                                <button className='depButton'>add deposit</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddDeposit;