import React from "react";

function Agent(props) {

    function AgentName(props) {
        return(
            <li><img className="agent-leads-img" src={props.img} alt="" />  Agent: Ahmed Allam</li>
        )
    }

    return (
        <>
            <div className="agent-leads-container">

                <div className="agentWorksOnProject">
                    <h3 className="agentTitle">Agent working on the product:</h3>
                    <ul className="agentsNames">
                        <AgentName img = "imgs/agent.png"/>
                        <AgentName img = "imgs/agent.png"/>
                        <AgentName img = "imgs/agent.png"/>
                        <AgentName img = "imgs/agent.png"/>
                        <AgentName img = "imgs/agent.png"/>
                        <AgentName img = "imgs/agent.png"/>
                        <AgentName img = "imgs/agent.png"/>
                        <AgentName img = "imgs/agent.png"/>
                        <AgentName img = "imgs/agent.png"/>

                    </ul>
                </div>

                <div className="leadsInterestedInTheProdect">
                    <h3 className="leadsTitle">Leads interested in the prodect</h3>
                    <ul className="leadsName">
                        <AgentName img = "imgs/leads.jpg"/>
                        <AgentName img = "imgs/leads.jpg"/>
                        <AgentName img = "imgs/leads.jpg"/>
                        <AgentName img = "imgs/leads.jpg"/>
                        <AgentName img = "imgs/leads.jpg"/>
                        <AgentName img = "imgs/leads.jpg"/>
                        <AgentName img = "imgs/leads.jpg"/>
                        <AgentName img = "imgs/leads.jpg"/>
                        <AgentName img = "imgs/leads.jpg"/>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Agent;