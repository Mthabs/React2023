import React from "react";
import './App.css';
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import HTTPRequests from "./components/HTTPRequests";
import HTTPPost from "./components/HTTPPost";
import HTTPHooks from "./components/HTTPHooks";
import Clock from "./components/Clock";
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingClassNested from './components/ConditionalRenderingClassNested';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ControlledForms from "./components/ControlledForms";
import UncontrolledForms from "./components/UncontrolledForms ";
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import LifeCyclesCDMMount from "./components/LifeCyclesCDMMount";
import LifeCyclesCDUUpdate from "./components/LifeCyclesCDUUpdate";
import LifeCyclesCWUUnmount from "./components/LifeCyclesCWUUnmount";
import RenderingLists from "./components/RenderingLists";
import StatefulGreetingBindingBindThis from './components/StatefulGreetingBindingBindThis';
import StatefulGreetingBindingConstructor from './components/StatefulGreetingBindingConstructor';
import StatefulGreetingBindingDefine from './components/StatefulGreetingBindingDefine';
import StatefulGreetingRender from "./components/StatefulGreetingRender";
import SearchBar1 from "./components/SearchBar1";
import SearchBar2 from "./components/SearchBar2";
import SearchBar3 from "./components/SearchBar3";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArraysHooks from "./components/UseStateWithArraysHooks";
import UseStateWithObjectsHooks from "./components/UseStateWithObjectsHooks";
import UseEffectCounterHooks from "./components/UseEffectCounterHooks";
import ClassCounter from "./components/ClassCounter";
import UseEffectCounterCleanupHooks from "./components/UseEffectCounterCleanupHooks";

function App() {
    return (
        <div className="App">
            <MethodsAsPropsParent/>
            <HTTPRequests/>
            <hr/>
            <HTTPPost />
            <hr/>
            <HTTPHooks/>
            <hr/>
            <Clock/>
            <hr/>
            <ConditionalRenderingClass />
            <hr/>
            <ConditionalRenderingClassNested />
            <hr/>
            <ConditionalRenderingFunctional connected = {true}/>
            <hr/>
            <ControlledForms/>
            <UncontrolledForms/>
            <hr/>
            <ControlledFormHooks/>
            <hr/>
            <UseStateWithArraysHooks/>
            <hr/>
            <UseStateWithObjectsHooks/>
            <hr/>
            <ClassCounter/>
            <UseEffectCounterHooks/>
            <UseEffectCounterCleanupHooks/>
            <hr/>
            <EventsClass />
            <EventsFunctional />
            <hr/>
            <FunctionalGreeting/>
            <hr/>
            <FunctionalGreetingWithProps greeting="Nice to meet you!!!" name="Mike!" age="32" />
            <hr/>
            <LifeCyclesCDMMount/>
            <hr/>
            <LifeCyclesCDUUpdate/>
            <hr/>
            <LifeCyclesCWUUnmount/>
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
            <hr/>
            <SearchBar1/>
            <SearchBar2/>
            <SearchBar3/>
        </div>
    );
}

export default App;
