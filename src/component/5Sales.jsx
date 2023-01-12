import React from "react";
import Table from 'react-bootstrap/Table';


function Sales() {

    function SallerData(props) {
        return (
            <tr className="sallers-details">
                <td className="sale-date"> <input type="checkbox" /> 12 Dec 2022 - 03:46 AM</td>
                <td className="sale-date">Soudio Branch</td>
                <td className="sale-date">Ahmed Allam</td>
            </tr>
        )
    }

    function Progress(props) {
        return (
            <div className="progress" >
                <div className="progress-bar" style={{ width: props.percent }}>
                    <span className="percent-label">{props.percent}</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <div data-aos="fade-down" data-aos-duration="1000" className="sales-container">

                <div className="sales-section">
                    <h4>Sales</h4>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> <input type="checkbox" /> Time</th>
                                <th>Branch</th>
                                <th>Saller</th>
                            </tr>
                        </thead>

                        <tbody>
                            <SallerData />
                            <SallerData />
                        </tbody>

                    </Table>

                    <hr />
                </div>

                <div className="target-section">
                    <div className="percent-target-title">
                        <h4>Target</h4>
                    </div>

                    <div className="persent-container">
                        <p>Achievements</p>
                        <div className="persenting">
                            <h5 className="persent">64%</h5>
                        </div>

                        <svg width="179" height="154">
                            <circle r="70" cx="100" cy="70" fill="transparent" stroke="#f9ca1c" stroke-width="0.7rem" stroke-dasharray="339.8" stroke-dashoffset="50"></circle>
                        </svg>
                    </div>



                </div>

            </div>
        </>
    )
}

export default Sales;