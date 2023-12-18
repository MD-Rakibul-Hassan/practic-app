import ClickCount from "../HOC_2/ClickCount";
import FouchCount from "../HOC_2/FouchCount";

const MainComponent = () => {
    return (
        <div className="timerContainer">
            <FouchCount />
            <ClickCount />
        </div>
    )
}
export default MainComponent;