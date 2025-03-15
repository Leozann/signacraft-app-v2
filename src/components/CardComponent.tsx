import CardStyles from "../assets/styles/CardComponent.module.scss"

interface CardProps {
    cardClass?: string;
    children: React.ReactNode;
};

function CardComponent( {cardClass, children}: CardProps) {
    return(
        <div className={`${CardStyles.card} ${cardClass}`}>
            {children}
        </div>
    );
};

export default CardComponent;