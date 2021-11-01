import React from 'react'
import CountsBlockComponent from './CountsBlockComponent'
import LeftNavComponent from './LeftNavComponent'
import MapComponent from './MapComponent'
import ViewChangerComponent from './ViewChangerComponent'

function HomeComponent() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2 bg-warning justify-content-center align-items-center p-5">
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
                            <div className="col-12 col-md-5 p-5">
                                <ViewChangerComponent />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-3 bg-light">
                    <h6>The information is based on self declaration by community members. Startup India dosen't moderate the information collected.</h6>
                </div>
            </div>
        </>
    )
}

export default HomeComponent
