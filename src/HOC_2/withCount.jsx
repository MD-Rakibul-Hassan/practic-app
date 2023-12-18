import React from "react";
const WithCount = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count : 0
        }
        handleFouchCount = () => {
            this.setState ({
                count : this.state.count + 1,
            })
        }
        render () {
            const {count} = this.state
            return <OriginalComponent count = {count}  handleFouchCount = {this.handleFouchCount}/>
        }
    }
    return NewComponent;
}
export default WithCount;