import React, { useMemo, Fragment, Suspense, useEffect } from 'react';
import './offer.css';

const Offer = () => {
    return (
        <div className={'offer-container'}>
            <h2>Save Extra With 4 Offers</h2>
            <ul>
                <li>5% Discount with lorem ipsum</li>
                <li>lorem ipsum</li>
            </ul>
            <button>
                <h2>VIEW MORE</h2>
            </button>
        </div>
    )
}

export default Offer