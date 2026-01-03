export const Card = ({card, handleClick}) => {


        return(
        <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={() => {handleClick(card)}}>
            <div className="card-front">
                ?
            </div>
            <div className="card-back">
                {card.value}
            </div>
        </div>
    )
}
