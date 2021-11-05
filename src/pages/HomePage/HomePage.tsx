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
    const [startupsListData, setStartupsList] = useState(STARTUPLIST);
    const [dataTableData, setDataTableList] = useState(DATATABLEDATA);

    const renderStartUpView = () => {
        setStartupListActive(true);
    }
    const renderDataTableView = () => {
        setStartupListActive(false);
    }

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
                <div className="text-center row py-3 mx-0 mt-2" style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 4px 10px rgba(193, 193, 193, 0.25)"

                }}>
                    <h6><b>Please Note :</b> The information is based on self declaration by community members. Startup India dosen't moderate the information collected.</h6>
                </div>
                <div className="row my-3 text-center d-flex justify-content-center">
                    <div className="btn-group text-center col-md-3 border" style={{ padding: "3px" }}>
                        <button className={startupListActive === true ? 'btn-primary btn px-3 text-white' : 'btn px-3'}
                            onClick={renderStartUpView}> Startups List</button>
                        <button className={startupListActive === false ? 'btn-primary btn px-3 text-white' : 'btn px-3'}
                            onClick={renderDataTableView}> Data Table</button>
                    </div>
                </div>
                <div className="row">
                    {startupListActive && (<StartupsListComponent data={startupsListData} />)}
                    {!startupListActive && (<DataTableComponent data={dataTableData} />)}
                </div>
            </div>
        </>
    )
}

export default HomePage
