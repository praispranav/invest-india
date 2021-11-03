import React from 'react'

function DataTableComponent(props: any) {
    if (props.data !== null) {
        return (
            <div className="container p-5 bg-warning text-center">
                <h1>DataTableComponent</h1>
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }
}

export default DataTableComponent