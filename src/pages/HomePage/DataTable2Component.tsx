import '../../scss/HomePageStyles/dataTable2Component.scss';

const DataTable2Component = () => {
    return (
        <>
            <table id="data-right-table">
                <thead>
                    <tr className="card d-flex border-dark flex-row mt-3 p-2" style={{ height: "85px" }}>
                        <th>Mentors</th>
                        <th>Incubators</th>
                        <th>Investors</th>
                        <th>Accelerators</th>
                        <th>Government</th>
                    </tr>
                </thead>
                <div className="row" style={{ marginTop: "16px", marginBottom: "16px" }}>
                    <div className="col-12 col-md-5" style={{ padding: "1.19rem" }}>
                    </div>
                </div>
                <tbody>
                    <tr className="p-2 card d-flex flex-row my-2 bg-white">
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                    </tr>
                    <tr className="p-2 card d-flex flex-row my-2 bg-white">
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                    </tr>
                    <tr className="p-2 card d-flex flex-row my-2 bg-white">
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                    </tr>
                    <tr className="p-2 card d-flex flex-row my-2 bg-white">
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                    </tr>
                    <tr className="p-2 card d-flex flex-row my-2 bg-white">
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>12000</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default DataTable2Component
