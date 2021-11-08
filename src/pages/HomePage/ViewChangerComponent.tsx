import { Input } from 'reactstrap';
import { IoMapSharp } from 'react-icons/io5';
import { RiDropFill } from 'react-icons/ri';
import { MdOutlineLocationCity } from 'react-icons/md';
import '../../scss/HomePageStyles/viewChangerComponent.scss';

function ViewChangerComponent() {
    return (
        <div className="container-fluid view-changer-component-styles">
            <div className="row d-flex align-items-center flex-row">
                <div className="col-12 col-md">
                    <span className="data-range-text">Data Range</span>
                    <Input id="dataRangeSelectBox" name="select" type="select" className="Input-Select-Box shadow-none" style={{ border: "2px solid #0177FA" }}>
                        <option>Select </option>
                        <option>     2 </option>
                        <option>     3 </option>
                        <option>     4 </option>
                        <option>     5 </option>
                    </Input>
                </div>
            </div>
            <div className="row icon-row">
                <div className="col-md-10 col-10">
                    <button className="bg-primary shadow-none btn btn-outline btn-icon-handler text-white"><IoMapSharp size={18} /></button>
                    <button className="bg-white text-dark shadow-none btn btn-icon-handler border-primary"><MdOutlineLocationCity size={18} /></button>
                    <button className="bg-white text-dark shadow-none btn btn-icon-handler border-primary"><IoMapSharp size={18} /></button>
                </div>
                <div className="col-md-2 col-2">
                    <button className="bg-white text-dark shadow-none btn btn-icon-handler border-primary"><RiDropFill size={18} /></button>
                </div>
            </div>
            <div className="row select-type-card">
                <h5>INDIAN STARTUPS</h5>
                <div>
                    <label className="select-type-text">Select Type</label>
                    <Input id="exampleSelect" name="select" type="select" className="Input-Select-Box2 shadow-none">
                        <option>All Startups </option>
                        <option>     2 </option>
                        <option>     3 </option>
                        <option>     4 </option>
                        <option>     5 </option>
                    </Input>
                </div>
                <div className="">
                    <div className="card d-flex flex-row align-items-center">
                        <h3>10254</h3><span className="selected-startups">All Startups</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewChangerComponent
