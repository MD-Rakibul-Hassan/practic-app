import withCounter from "./withCounter";

function FocushCount (props) {
    const {count,incrementCount} = props;
    return (
        <div>
            <input type="text" onChange={incrementCount} value={count} />
        </div>
    ) 
}
export default withCounter(FocushCount);