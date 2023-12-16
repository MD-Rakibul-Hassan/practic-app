import withCounter from "./withCounter";
function ClickCounter (props) {
    const {count,incrementCount} = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hover here {count} time</h1>
        </div>
    )

}
export default withCounter(ClickCounter);