import React from 'react'

export class LifeCyclesCDMChildMount extends Component {
    constructor(props) {
        console.log("constructor called")
      super(props)
    
      this.state = {
         data: 'loading'
      }
    }
    getData(){
        setTimeout(() => {
            console.log("getData() called")
            this.setState({
                data:'loaded'
            })
            }, 3000)
    }
    componentDidMount(){
        console.log("component mounted")
        this.getData()
    }
  render() {
    console.log("render() called")
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}

export default LifeCyclesCDMChildMount