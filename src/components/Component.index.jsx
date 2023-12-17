import ClickCounter from "./RenderProps/ClickCount";
import HoverCounter from "./RenderProps/HoverCount";
import Common from "./RenderProps/Common";

const MainComponent = () => {
    return (
        <div className="timerContainer">
            <Common renderProps = { (count,increment) => (
                <ClickCounter  count = {count} increment = {increment}/>
            )}/>
            <Common renderProps = { (count,increment) => (
                <HoverCounter  count = {count} increment = {increment}/>
            )}/>
        </div>
    )
}
export default MainComponent;