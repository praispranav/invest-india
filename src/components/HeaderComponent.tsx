import React from 'react'

function HeaderComponent() {
    return (
        <div className=" pt-4 pb-2 bg-light text-dark border-bottom shadow">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md">
                        <img src="/assets/images/main-logo-white.png" alt="main-logo" />
                    </div>
                    <div className="col-12 col-md-5">
                        <ul className="list-unstyled d-flex">
                            <li className="mx-2 ms-auto nav-list-item">About</li>
                            <li className="mx-2">Resources</li>
                            <li className="mx-2">Schemes & Policies</li>
                            <li className="mx-2">Programs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
