import React from 'react'
import CardSection from './CardSection'
import CitiesSection from './CitiesSection'
import FoodJoints from './FoodJoints/FoodJoints'
import Testimonials from './Testimonials/Testimonials'

const Section = () => {
    return (
        <React.Fragment>
            <div className='margin-top-max'></div>
            <h2 className='member-card-header'>
                Become Our Member<span><i className="fas fa-users font-orange-color"></i></span>
            </h2>
            <div className='border-btm-orange border-width-25'></div>
            <CardSection />
            <div className='margin-top-max'></div>
            <h2 className='member-card-header'>
                Popular Cities<span><i className="fas fa-city font-orange-color"></i></span>
            </h2>
            <div className='border-btm-orange border-width-25'></div>
            <CitiesSection />
            <div className='margin-top-max'></div>
            <h2 className='member-card-header'>
                Popular Food Joints<span><i className="fas fa-utensils font-orange-color"></i></span>
            </h2>
            <div className='border-btm-orange border-width-25'></div>
            <FoodJoints />
            <div className='margin-top-max'></div>
            <h2 className='member-card-header'>
                Testimonials<span><i className="fas fa-comments font-orange-color"></i></span>
            </h2>
            <div className='border-btm-orange border-width-25'></div>
            <Testimonials />
        </React.Fragment>
    );
}

export default Section;