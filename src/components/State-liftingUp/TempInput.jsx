const TempInput = () => {
    return (
        <div>
            <input type="text" onChange={this.handleTempratur} placeholder="Enter tempratur"/>
            <BoilVardict  celcius = {tempratur}/>
        </div>
    )

}

export default TempInput;