import React, { Component } from 'react'
import { STARTUPLIST } from '../shared/startuplist'
import CountsBlockComponent from './CountsBlockComponent'
import DataTableComponent from './DataTableComponent'
import LeftNavComponent from './LeftNavComponent'
import MapComponent from './MapComponent'
import StartupsListComponent from './StartupsListComponent'
import ViewChangerComponent from './ViewChangerComponent'

interface Iprops {

}
interface Istates {
    startupsListData: any,
    dataTableData: any
}

class HomeComponent extends Component<Iprops, Istates>{
    constructor(props: Iprops) {
        super(props);

        this.state = {
            startupsListData: null,
            dataTableData: null
        }
    }

    setStartUpData() {
        this.setState({ startupsListData: STARTUPLIST });
        this.setState({ dataTableData: null });
    }
    setDataTableData() {
        this.setState({ dataTableData: [{}] });
        this.setState({ startupsListData: null });
    }
    render() {
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
                    <div className="row my-3 text-center d-flex justify-content-center">
                        <div className="btn-group text-center col-md-3 border" style={{ padding: "3px" }}>
                            <button className="btn px-3 btn-primary" onClick={() => this.setStartUpData()}> Startups List</button>
                            <button className="btn px-3 btn-primar" onClick={() => this.setDataTableData()}> Data Table</button>
                        </div>
                    </div>
                    <div className="row">
                        <StartupsListComponent data={this.state.startupsListData} />
                        <DataTableComponent data={this.state.dataTableData} />
                    </div>
                </div>
            </>
        )
    }
}
export default HomeComponent
