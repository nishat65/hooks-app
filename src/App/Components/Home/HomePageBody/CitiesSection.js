import React from 'react'

const CitiesSection = () => {
    return (
        <div className='margin-twenty cities-section'>
            <div className='p-relative'>
                <img
                    src={require('../../../Assets/20200411_SRP099_0.jpg')}
                    alt='South Korea'
                    width='250px'
                    height='150px'
                />
                <div className='section-image-description'>South Korea</div>
            </div>

            <div className='p-relative'>
                <img
                    src={require('../../../Assets/japan-1200x729.jpg')}
                    alt='Japan'
                    width='250px'
                    height='150px'
                />
                <div className='section-image-description'>Japan</div>
            </div>

            <div className='p-relative'>
                <img
                    src={require('../../../Assets/Alps-Switzerland.jpg')}
                    alt='Switzerland'
                    width='250px'
                    height='150px'
                />
                <div className='section-image-description'>Switzerland</div>
            </div>

            <div className='p-relative'>
                <img
                    src={require('../../../Assets/auli-adventure.jpg')}
                    alt='Auli'
                    width='250px'
                    height='150px'
                />
                <div className='section-image-description'>Auli</div>
            </div>

            <div className='p-relative'>
                <img
                    src={require('../../../Assets/eiffel-tower-in-paris-151-medium.jpg')}
                    alt='Paris'
                    width='250px'
                    height='150px'
                />
                <div className='section-image-description'>Paris</div>
            </div>
        </div>
    );
}

export default CitiesSection;