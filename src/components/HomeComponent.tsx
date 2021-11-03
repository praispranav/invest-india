import React from 'react'
import CountsBlockComponent from './CountsBlockComponent'
import LeftNavComponent from './LeftNavComponent'
import MapComponent from './MapComponent'
import ViewChangerComponent from './ViewChangerComponent'

function HomeComponent() {
    return (
        <>
            <div className="container-fluid bg-light  border-bottom">
                <div className="row">
                    <div className="col-12 col-md-2 px-0 p-0">
                        <LeftNavComponent></LeftNavComponent>
                    </div>
                    <div className="col-12 col-md">
                        <div className="row p-1 m-2">
                            <CountsBlockComponent />
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-7 bg-success p-5">
                                <MapComponent />
                            </div>
                            <div className="col-12 col-md-5">
                                <ViewChangerComponent />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center row py-3 mx-0 mt-2" style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 4px 10px rgba(193, 193, 193, 0.25)"
                }}>
                    <h6>The information is based on self declaration by community members. Startup India dosen't moderate the information collected.</h6>
                </div>
            </div>
        </>
    )
}

export default HomeComponent
