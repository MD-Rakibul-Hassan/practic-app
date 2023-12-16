import withCounter from "./withCounter";



function ClickCounter (props) {
    const {count,incrementCount} = props;
    return (
        <div>
            <button onClick={incrementCount}>Click here {count} time</button>
        </div>
    )

}
export default withCounter(ClickCounter);