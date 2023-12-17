import React from "react";

class Common extends React.Component {
    state = {
        count : 0
    }
    incriseCounter = () => {
        this.setState (
            prevusCount => ({
                count : prevusCount.count + 1
            })
        )
    }
    render () {
        const {renderProps} =this.props;
        const {count} = this.state;
        return  renderProps (count,this.incriseCounter)
    }
}
export default Common;