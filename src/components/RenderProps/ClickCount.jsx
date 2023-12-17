import React from "react";

class ClickCounter extends React.Component {
   
    render () {
        const {count,increment} = this.props;
        console.log(count)
        return (
            <div>
                <button onClick={increment}>Click me {count} times</button>
            </div>
        )
    }
}
export default ClickCounter;