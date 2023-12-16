import React from "react";

class Map extends React.Component {

    render () {
        const countrys = ["Bangladesh","Japan","Pakishtan","Canada"]
        return (
            <div>
                <h1>Loop in React</h1>
                <ul>
                    {
                        countrys.map( (value) => {
                            return <li key={Math.random()}>{value}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Map;