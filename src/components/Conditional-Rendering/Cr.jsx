import React,{Component} from "react";

class ConditionalRender extends Component {
    state = {
        name : "Rakib"
    }
    change = () => {
        this.setState ({name : "Shehab"})
    }
    back = () => {
        this.setState({name: "Rakib"})
    }

    render () {
        const {name}  = this.state;
        let button;
        if (name === "Rakib") {
            button =  <button className="btn1" onClick={this.change}>Change name </button>
        }else {
            button =  <button onClick={this.back}>Change name </button>
        }
        return (
            <div>
                <h1>Conditional rendering</h1>
                <h4>{name}</h4>
               {button}
            </div>
        )
    } 
}
export default ConditionalRender;