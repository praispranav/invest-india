import React from 'react'
import { COUNTBLOCK } from '../../shared-data/countBlockList';
import '../HomePageStyles/countBlockComponent.scss';

function CountsBlockComponent() {
    const data = COUNTBLOCK;
    const boxList = data.map((d1) => {
        return (
            <>
                <div key={d1._id} className="col-5 col-md m-1 p-3 p-2" style={{
                    backgroundColor: `${d1.backgroundColor}`,
                    border: `2px solid ${d1.borderColor}`,
                    color: `${d1.color}`,
                    borderRadius: "4px",
                    height: "98px",
                    width: "170px"
                }}>
                    <h4>{d1.count}</h4>
                    <h6>{d1.boxTitle}</h6>
                </div>
            </>
        )
    })
    return (
        <div className="container-fluid">
            <div className="row">
                <h5>India</h5>
            </div>
            <div className="row">
                {boxList}
            </div>
        </div>
    )
}

export default CountsBlockComponent