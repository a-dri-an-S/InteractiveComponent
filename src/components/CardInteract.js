import Star from '../assets/star.svg'
import "../styles/CardInteractive.css"

const CardInteract = () => {
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
                <button className="card-interactive-scale-btn">1</button>
                <button className="card-interactive-scale-btn">2</button>
                <button className="card-interactive-scale-btn">3</button>
                <button className="card-interactive-scale-btn">4</button>
                <button className="card-interactive-scale-btn">5</button>
            </div>
            <button className="card-interactive-submit-btn">SUBMIT</button>
        </div>
    );
}

export default CardInteract;