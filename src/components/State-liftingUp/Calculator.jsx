import React from "react";
import TempInput from "./TempInput";
import BoilVardict from "./boilVardict";

class Calculator extends React.Component {
    state = {
        tempratur : ""
    }
    handleTempratur = (e) => {
        this.setState ({
            tempratur : e.target.value
        })
    }

    render () {
        const {tempratur} = this.state;
        return (
            <div>
                <TempInput />
                <TempInput />
            </div>
        )
    }
}

export default Calculator;