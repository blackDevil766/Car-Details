import React from "react";

function Target(props) {
    function Targets(props) {
        return(
            <div className="target-item">
                <li className="target-title-name">{props.title}</li>
                <h2 className="numberOfTarget">{props.number}</h2>
                <div className={props.class}></div>

            </div>
        )
    }

    return (
        <>
            <div className="target-container">
                <h4>Target</h4>
                <div className="target-data-container">
                    <Targets class = "target-carve1" title = "Leads" number = "254.6K"/>
                    <Targets class = "target-carve2" title = "Sales Calls" number = "198.6K"/>
                    <Targets class = "target-carve3" title = "Follow-Up" number = "129.2K"/>
                    <Targets class = "target-carve4" title = "Conversion" number = "98.0K"/>
                    <Targets class = "target-carve5" title = "Sales" number = "86.9k"/>
                </div>

            </div>
        </>
    )
}

export default Target;