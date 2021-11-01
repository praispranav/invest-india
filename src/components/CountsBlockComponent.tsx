import React from 'react'

function CountsBlockComponent() {
    const data = [
        {
            _id: "1",
            boxTitle: "Startups",
            count: 10254,
            color: "white",
            backgroundColor: "blue",
            borderColor: "blue"
        },
        {
            _id: "2",
            boxTitle: "Mentors",
            count: 1055,
            color: "black",
            backgroundColor: "white",
            borderColor: "orange"
        },
        {
            _id: "3",
            boxTitle: "Incubaror",
            count: 2044,
            color: "black",
            backgroundColor: "white",
            borderColor: "purple"
        },
        {
            _id: "4",
            boxTitle: "Investor",
            count: 1055,
            color: "black",
            backgroundColor: "white",
            borderColor: "yellow"
        },
        {
            _id: "5",
            boxTitle: "Accelertors",
            count: 454,
            color: "black",
            backgroundColor: "white",
            borderColor: "red"
        },
        {
            _id: "6",
            boxTitle: "Government",
            count: 2376,
            color: "black",
            backgroundColor: "white",
            borderColor: "green"
        },
    ]
    const boxList = data.map((d1) => {
        return (
            <>
                <div key={d1._id} className="col-5 col-md m-1 p-3 p-2" style={{
                    backgroundColor: `${d1.backgroundColor}`,
                    border: `2px solid ${d1.borderColor}`,
                    color: `${d1.color}`,
                    borderRadius: "7px"
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
