import ReactDom from "react-dom";
import TooltipStyle from "../assets/styles/TooltipComponent.module.scss";

function TooltipComponent() {
    const tooltipRoot = document.getElementById("root-tooltip");
    return ReactDom.createPortal(
        <div className={TooltipStyle.wrapper}>
            <p>This is a tooltip component.</p>
        </div>,
        tooltipRoot!
    );

}

export default TooltipComponent;