import WithCount from "./withCount";

function ClickCount ({count,handleFouchCount}) {
    return (
        <div>
            <button onClick={handleFouchCount}>Click me</button>
            <p>Click count : {count}</p>
        </div>
    )
}

export default WithCount (ClickCount)