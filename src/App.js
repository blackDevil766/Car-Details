import './App.css';
import React, {useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Agent from './component/agent/Agent';
import CarDesciption from "./component/1CarDesciption"
import Target from './component/2Target';
import LeadCalls from './component/3LeadsCalls';
import Media from './component/4Media';
import Sales from './component/5Sales';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">

      <div className="home-section">
        
        <div className="header-part">
          <CarDesciption />
          <Target />
        </div>

        <div className="bottom-section">
          <LeadCalls />
          <Media />
          <Sales />
        </div>

      </div>


      <div className="agent-section">
        <Agent />
      </div>

    </div>
  );
}

export default App;
