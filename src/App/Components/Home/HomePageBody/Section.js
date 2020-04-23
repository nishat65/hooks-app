import React from 'react'
import CardSection from './CardSection'
import CitiesSection from './CitiesSection'

const Section = () => {
    return (
        <React.Fragment>
            <h2 className='member-card-header'>Become Our Member</h2>
            <div className='border-btm-orange margin-twenty'></div>
            <CardSection />
            <div className='margin-twenty'></div>
            <div className='border-btm-orange margin-twenty'></div>
            <h2 className='member-card-header'>Our Cities</h2>
            <CitiesSection/>
        </React.Fragment>
    );
}

export default Section;