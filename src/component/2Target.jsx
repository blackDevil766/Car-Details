import React from "react";

function Target(props) {
    function Targets(props) {
        return(
            <div data-aos="fade-down" data-aos-duration={props.time} className="target-item">
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
                    <Targets time = "2000" class = "target-carve1" title = "Leads" number = "254.6K"/>
                    <Targets time = "2000" class = "target-carve2" title = "Sales Calls" number = "198.6K"/>
                    <Targets time = "1500" class = "target-carve3" title = "Follow-Up" number = "129.2K"/>
                    <Targets time = "1000" class = "target-carve4" title = "Conversion" number = "98.0K"/>
                    <Targets time = "500" class = "target-carve5" title = "Sales" number = "86.9k"/>
                </div>

            </div>
        </>
    )
}

export default Target;