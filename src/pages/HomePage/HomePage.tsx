import React from "react";
import { Button } from "../../styles-components/Button";
import { FaHome } from 'react-icons/fa';
import HomeComponent from "../../components/HomeComponent";

export default function HomePage() {
    return (
        <div className="container p-5">
            <div className="row d-flex flex-row">
                <div className="col-2">
                    <Button >Click Me <FaHome style={{ marginBottom: "4px" }} /></Button>
                </div>
                <div className="col-9">
                    <HomeComponent />
                </div>
            </div>
        </div>
    )
}