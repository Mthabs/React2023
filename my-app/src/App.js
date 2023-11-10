import React from "react";
import './App.css';
import Clock from "./components/Clock";
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingClassNested from './components/ConditionalRenderingClassNested';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import RenderingLists from "./components/RenderingLists";
import StatefulGreetingBindingBindThis from './components/StatefulGreetingBindingBindThis';
import StatefulGreetingBindingConstructor from './components/StatefulGreetingBindingConstructor';
import StatefulGreetingBindingDefine from './components/StatefulGreetingBindingDefine';
import StatefulGreetingRender from "./components/StatefulGreetingRender";

function App() {
    return (
        <div className="App">
            <Clock/>
            <hr/>
            <ConditionalRenderingClass />
            <hr/>
            <ConditionalRenderingClassNested />
            <hr/>
            <ConditionalRenderingFunctional connected = {true}/>
            <hr/>
            <EventsClass />
            <EventsFunctional />
            <hr/>
            <FunctionalGreetingWithProps greeting="Nice to meet you!!!" name="Mike!" age="32" />
            <hr/>
            <RenderingLists/>
            <hr/>
            <StatefulGreetingBindingBindThis name="John!" greeting="How are you doing?" />
            <hr/>
            <StatefulGreetingBindingConstructor name="John!" greeting="How are you doing?" />
            <hr/>
            <StatefulGreetingBindingDefine name="John!" greeting="How are you doing?" />
            <hr/>
            <StatefulGreetingRender name="John!" greeting="How are you doing?" />
            
        </div>
    );
}

export default App;