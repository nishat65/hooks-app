import React from 'react'
import CardSection from './CardSection'
import CitiesSection from './CitiesSection'
import FoodJoints from './FoodJoints/FoodJoints'

const Section = () => {
    return (
        <React.Fragment>
            <div className='margin-top-max'></div>
            <h2 className='member-card-header'>
                Become Our Member<span><i className="fas fa-users font-orange-color"></i></span>
            </h2>
            <div className='border-btm-orange margin-five'></div>
            <CardSection />
            <div className='margin-top-max'></div>
            <h2 className='member-card-header'>
                Our Cities<span><i className="fas fa-city font-orange-color"></i></span>
            </h2>
            <div className='border-btm-orange margin-five'></div>
            <CitiesSection />
            <div className='margin-top-max'></div>
            <h2 className='member-card-header'>
                Our Food Joints<span><i className="fas fa-utensils font-orange-color"></i></span>
            </h2>
            <div className='border-btm-orange margin-five'></div>
            <FoodJoints />
        </React.Fragment>
    );
}

export default Section;