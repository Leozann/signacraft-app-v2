import ReactDom from "react-dom";
import TooltipStyle from "../assets/styles/TooltipComponent.module.scss";
import IconComponent from "./IconComponent";

interface TooltipProps {
    message: string;
    isCollapsed: boolean;
};

function TooltipComponent({message, isCollapsed}: TooltipProps) {
    const tooltipRoot = document.getElementById("root-tooltip");
    return ReactDom.createPortal(
        <div className={`${TooltipStyle.wrapper} ${isCollapsed ? TooltipStyle.hidden: TooltipStyle.visible}`}>
            <div className={TooltipStyle.tooltip}>
                <div className={TooltipStyle.icon}>
                    <IconComponent iconType="burger-drink" iconClass={TooltipStyle.icon} />
                </div>
                <div className={TooltipStyle.content}>
                    {/* <p>This is a tooltip component.</p> */}
                    <p>{message}</p>
                </div>
            </div>
        </div>,
        tooltipRoot!
    );

}

export default TooltipComponent;