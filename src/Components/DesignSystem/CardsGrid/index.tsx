import CardContainer from "../CardContainer";

const CardsGrid = ({allCardsData}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {allCardsData.map((cardProps) => (
                <CardContainer {...cardProps as any}/>
            ))}
        </div>
    )
};

export default CardsGrid;