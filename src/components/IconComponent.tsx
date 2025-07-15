interface IconProps {
    iconType?: string;
    iconClass?: string;
    iconClickFunction?: ()=> void
};

function IconComponent ({iconType = "react", iconClass="", iconClickFunction}: IconProps) {
    return(
        <i className={`lni lni-${iconType} ${iconClass}`} onClick={iconClickFunction}/>
    );
    
};

export default IconComponent;