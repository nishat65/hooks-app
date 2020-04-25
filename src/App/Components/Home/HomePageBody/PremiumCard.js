import React from 'react'

const PremiumCards = () => {
    return (
        <>
            <div className='premium-card card-left'>
                <div className='lifetime-premium'>Monthly</div>
                <div className='margin-ten padding-all text-center font-orange-color font-2-rem'>
                    &#x24; 50
                   <div className='border-orange margin-ten'></div>
                </div>
                <div className='premium-about-text font-blue-color text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div>
                    <button className='read-more-button'>Read More</button>
                </div>
            </div>
            <div className='premium-card card-middle'>
                <div className='lifetime-premium'>Premium</div>
                <div className='margin-ten padding-all text-center font-orange-color font-2-rem'>
                    &#x24; 150
                   <div className='border-orange margin-ten'></div>
                </div>
                <div className='premium-about-text font-blue-color text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div>
                    <button className='read-more-button'>Read More</button>
                </div>
            </div>
            <div className='premium-card card-right'>
                <div className='lifetime-premium'>Yearly</div>
                <div className='margin-ten padding-all text-center font-orange-color font-2-rem'>
                    &#x24; 100
                   <div className='border-orange margin-ten'></div>
                </div>
                <div className='premium-about-text font-blue-color text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div>
                    <button className='read-more-button'>Read More</button>
                </div>
            </div>
        </>
    );
}

export default PremiumCards;