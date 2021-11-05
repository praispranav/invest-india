import { useState } from 'react';
import CountsBlockComponent from './CountsBlockComponent'
import DataTableComponent from './DataTableComponent'
import LeftNavComponent from './LeftNavComponent'
import MapComponent from './MapComponent'
import StartupsListComponent from './StartupsListComponent'
import ViewChangerComponent from './ViewChangerComponent'
import '../../scss/HomePageStyles/homeComponent.scss';
import { STARTUPLIST } from '../../shared-data/startuplist'
import { DATATABLEDATA } from '../../shared-data/dataTable'

const HomePage = () => {

    const [startupListActive, setStartupListActive] = useState(true);
    const [startupsListData] = useState(STARTUPLIST);
    const [dataTableData] = useState(DATATABLEDATA);

    const toggleStartUp = () => setStartupListActive(prevState => !prevState)
    return (
        <>
            <div className="container-fluid bg-light border-bottom">
                <div className="row">
                    <div className="col-12 col-md-2 px-0 p-0">
                        <LeftNavComponent></LeftNavComponent>
                    </div>
                    <div className="col-12 col-md">
                        <div className="row p-1 m-2">
                            <CountsBlockComponent />
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-7 p-5">
                                <MapComponent />
                            </div>
                            <div className="col-12 col-md-5">
                                <ViewChangerComponent />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center bg-white py-3 mx-0 my-2 strip" >
                    <h6><b>Please Note :</b> The information is based on self declaration by community members. Startup India dosen't moderate the information collected.</h6>
                </div>
                <div className="row my-3 d-flex justify-content-center">
                    <div className="btn-group text-center col-md-3 border p-1">
                        {/* <button className={startupListActive === true ? 'btn-primary btn px-3 text-white' : 'btn px-3'}
                            onClick={renderStartUpView}> Startups List</button>
                        <button className={startupListActive === false ? 'btn-primary btn px-3 text-white' : 'btn px-3'}
                            onClick={renderDataTableView}> Data Table</button> */}
                        <div className="btn-group text-center col-md-3 border" style={{ padding: "3px" }}>
                            <button className={`btn px-3 ${startupListActive && 'btn-primary text-white'}`}
                                onClick={toggleStartUp}> Startups List</button>
                            <button className={`btn px-3 ${!startupListActive && 'btn-primary text-white'}`}
                                onClick={toggleStartUp}> Data Table</button>
                        </div>
                    </div>
                    <div className="row">
                        {startupListActive && (<StartupsListComponent data={startupsListData} />)}
                        {!startupListActive && (<DataTableComponent data={dataTableData} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
