import ThankYou from "../assets/thank-you.svg";
import "../styles/CardSubmit.css";

const CardSubmit = ({ rating }) => {
    return (
        <div className="card-submit">
            <img className="card-submit-img" src={ThankYou} alt="Thank you!"/>
            <div className="card-submit-rating">
                <p className="card-submit-rating-text">
                    You selected {rating} out of 5
                </p>
            </div>
            <div className="card-submit-info">
                <h1 className="card-submit-title">
                    Thank you!
                </h1>
                <p className="card-submit-text">
                    We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>

        </div>
    );
}

export default CardSubmit;