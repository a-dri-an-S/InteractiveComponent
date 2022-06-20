import { useState } from 'react';

import CardInteractive from './CardInteract';
import CardSubmit from "./CardSubmit";
import "../styles/Card.css";

const Card = () => {

    const [ratingSelect, setRatingSelect] = useState(0);
    const [ratingSubmit, setRatingSubmit] = useState(false);

    return (
        <section className="main-card">
            {
                ratingSubmit ? 
                <CardSubmit 
                    rating={ratingSelect}
                /> :
                <CardInteractive 
                rating={ratingSelect}
                ratingSelect={setRatingSelect}
                ratingSubmit={setRatingSubmit}
            />
            }
            
        </section>
    );
}

export default Card;