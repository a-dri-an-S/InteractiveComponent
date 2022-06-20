import { useState } from 'react';

import CardInteractive from './CardInteract';
import "../styles/Card.css";

const Card = () => {

    const [ratingSelect, setRatingSelect] = useState(0);
    const [ratingSubmit, setRatingSubmit] = useState(false);

    return (
        <section className="main-card">
            <CardInteractive 
                rating={ratingSelect}
                ratingSelect={setRatingSelect}
            />
        </section>
    );
}

export default Card;