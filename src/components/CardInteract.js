import Star from '../assets/star.svg'
import "../styles/CardInteractive.css"

const CardInteract = ({ ratingSelect, rating }) => {

    return (
        <div className="card-interactive">
            <div className="card-star">
                <img className="card-star-img" src={Star} alt="star"/>
            </div>
            <div className="card-interactive-info">
                <h1 className="card-interactive-title">
                    How did we do?
                </h1>
                <p className="card-interactive-text">
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="card-interactive-scale">
                <button 
                    className={`card-interactive-scale-btn ${rating === 1 ? "active" : ""}`}
                    onClick={() => ratingSelect(1)}
                >1</button>
                <button 
                    className={`card-interactive-scale-btn ${rating === 2 ? "active" : ""}`}
                    onClick={() => ratingSelect(2)}
                >2</button>
                <button 
                    className={`card-interactive-scale-btn ${rating === 3 ? "active" : ""}`}
                    onClick={() => ratingSelect(3)}
                >3</button>
                <button 
                    className={`card-interactive-scale-btn ${rating === 4 ? "active" : ""}`}
                    onClick={() => ratingSelect(4)}
                >4</button>
                <button 
                    className={`card-interactive-scale-btn ${rating === 5 ? "active" : ""}`}
                    onClick={() => ratingSelect(5)}
                >5</button>
                
            </div>
            <button className="card-interactive-submit-btn">SUBMIT</button>
        </div>
    );
}

export default CardInteract;