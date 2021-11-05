import React, { Component } from 'react'
import CountsBlockComponent from './CountsBlockComponent'
import DataTableComponent from './DataTableComponent'
import LeftNavComponent from './LeftNavComponent'
import MapComponent from './MapComponent'
import StartupsListComponent from './StartupsListComponent'
import ViewChangerComponent from './ViewChangerComponent'
import { STARTUPLIST } from '../../shared-data/startuplist'
import '../HomePageStyles/homeComponent.scss';

interface Iprops {

}
interface Istates {
    startupsListData: any,
    dataTableData: any,
    blueButtonId: any,
    greyButtonId: any
}

class HomePage extends Component<Iprops, Istates>{
    constructor(props: Iprops) {
        super(props);

        this.state = {
            startupsListData: null,
            dataTableData: null,
            blueButtonId: 1,
            greyButtonId: 0
        }
    }
    setStartUpData() {
        this.setState({ startupsListData: STARTUPLIST });
        this.setState({ dataTableData: null });
        this.setState({ blueButtonId: 1 })
        this.setState({ greyButtonId: 0 })
    }
    setDataTableData() {
        this.setState({ dataTableData: [{}] });
        this.setState({ startupsListData: null });
        this.setState({ greyButtonId: 1 })
        this.setState({ blueButtonId: 0 })
    }
    render() {
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
                            <button className={this.state.blueButtonId === 1 ? 'btn-primary btn px-3 text-white' : 'btn px-3'}
                                onClick={() => this.setStartUpData()}> Startups List</button>
                            <button className={this.state.greyButtonId === 1 ? 'btn-primary btn px-3 text-white' : 'btn px-3'}
                                onClick={() => this.setDataTableData()}> Data Table</button>
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
export default HomePage
