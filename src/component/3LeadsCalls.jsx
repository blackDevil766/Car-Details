import React from "react";
import Table from 'react-bootstrap/Table';


function LeadCalls() {

    function LeadData(props) {
        return (
            <tr>
                <td>
                    <div className="leads-data-container">
                        <div className="leadImg">
                            <input type="checkbox" />
                            <img src="imgs/leads.jpg" alt="" />
                        </div>

                        <div className="leadsDetails">
                            <p>Ahmed</p>
                            <p>01284839372</p>
                        </div>
                    </div>
                </td>

                <td className="td-edit">06:00 am to 12:00pm</td>
                <td className="td-edit"> <p className="calls-details">first Call  first Call first Call first Call </p></td>
                <td className="td-edit"> <p className="calls-details">secondCall secondCall secondCall secondCall  </p></td>
                {/* <td className="ttd"><img src="imgs/penEdit.svg" alt="" /></td> */}

            </tr>
        )
    }

    return (
        <>
            <div className="Records-container">
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> <input type="checkbox" /> Leads</th>
                            <th>Best Time</th>
                            <th>Call 1</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <LeadData />
                       
                        <LeadData />

                        <LeadData />
                    </tbody>

                </Table>

                <hr />
            </div>
        </>
    )
}

export default LeadCalls;