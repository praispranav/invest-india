import React from 'react'

function CountsBlockComponent() {
    const data = [
        {
            _id: "1",
            boxTitle: "Startups",
            count: 10254,
            color: "white",
            backgroundColor: "#0177FA",
            borderColor: "#0177FA"
        },
        {
            _id: "2",
            boxTitle: "Mentors",
            count: 1055,
            color: "black",
            backgroundColor: "white",
            borderColor: "#ED8E00"
        },
        {
            _id: "3",
            boxTitle: "Incubator",
            count: 2044,
            color: "black",
            backgroundColor: "white",
            borderColor: "#0177FA"
        },
        {
            _id: "4",
            boxTitle: "Investor",
            count: 1055,
            color: "black",
            backgroundColor: "white",
            borderColor: "#BDAA00"
        },
        {
            _id: "5",
            boxTitle: "Accelertors",
            count: 454,
            color: "black",
            backgroundColor: "white",
            borderColor: "#CB3535"
        },
        {
            _id: "6",
            boxTitle: "Government",
            count: 2376,
            color: "black",
            backgroundColor: "white",
            borderColor: "#00AD11"
        },
    ]
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
