import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="forcards1.png"
                            text="Learn anytime,anywhere for free!!"
                            label='Remote Learning'
                            path='/services'
                        />
                        <CardItem
                            src="forcards2-2.png"
                            text="Practice and learn while playing!! "
                            label='Gamified Learning'
                            path='/services'
                        />
                        <CardItem
                            src="forcards3.jpeg"
                            text="Never stop this unique learning!!"
                            label='Adaptive Learning'
                            path='/services'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
