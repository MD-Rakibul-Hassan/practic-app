import React from "react";

class HoverCounter extends React.Component {

    render () {
        const {count,increment} = this.props;
        return (
            <div>
                <h1 onMouseOver={increment}>Hover me {count} times</h1>
            </div>
        )
    }
}
export default HoverCounter;