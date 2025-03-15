interface IconProps {
    iconType?: string;
    iconClass?: string;
};

function IconComponent ({iconType = "react", iconClass=""}: IconProps) {
    return(
        <i className={`lni lni-${iconType} ${iconClass}`}/>
    );
    
};

export default IconComponent;