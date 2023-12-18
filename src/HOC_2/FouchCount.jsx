import WithCount from "./withCount";

function FouchCount ( {count,handleFouchCount} ) {
        return (
            <div>
                <h1>Fouch count</h1>
                <input type="text"  onFocus={handleFouchCount} />
                <p>Fouch count : {count}</p>
            </div>
        )
}
export default WithCount(FouchCount);