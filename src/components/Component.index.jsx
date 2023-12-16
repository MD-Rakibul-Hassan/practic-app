import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";

const MainComponent = () => {
    return (
        <div className="timerContainer">
            <ClickCounter />
            <HoverCounter />
        </div>
    )
}
export default MainComponent;