import React, { Component } from 'react'
import LifeCyclesCWUTrackerUnmount from './LifeCyclesCWUTrackerUnmount'

export class LifeCyclesCWUUnmount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }
    }

    toggleDisplay = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    render() {
        return (
            <div>
                {this.state.visible && <LifeCyclesCWUTrackerUnmount />}
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
        )
    }
}

export default LifeCyclesCWUUnmount
