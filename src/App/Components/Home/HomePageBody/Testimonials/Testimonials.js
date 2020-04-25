import React from 'react'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonials-card'>
                <img
                    height='150px'
                    width='100px'
                    src={require('../../../../Assets/Testimonials/6733777-4.jpg')}
                />
                <div className='padding-all'>Mr. Bruce</div>
                <div className='testimonial-text'>
                    <sup className='padding-all font-orange-color'>
                        <i className="fas fa-quote-left"></i>
                    </sup>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    <sup className='padding-all font-orange-color'>
                        <i className="fas fa-quote-right"></i>
                    </sup>
                </div>
            </div>

            <div className='testimonials-card'>
                <img
                    height='150px'
                    width='100px'
                    src={require('../../../../Assets/Testimonials/a15c9567361309.5b3698f1cc605.jpg')} />
                <div className='padding-all'>Mr. Joker</div>
                <div className='testimonial-text'>
                    <sup className='padding-all font-orange-color'>
                        <i className="fas fa-quote-left"></i>
                    </sup>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    <sup className='padding-all font-orange-color'>
                        <i className="fas fa-quote-right"></i>
                    </sup>
                </div>
            </div>

            <div className='testimonials-card'>
                <img
                    height='150px'
                    width='100px'
                    src={require('../../../../Assets/Testimonials/mT0cFOVQ_400x400.jpg')} />
                <div className='padding-all'>Mr. Wade</div>
                <div className='testimonial-text'>
                    <sup className='padding-all font-orange-color'>
                        <i className="fas fa-quote-left"></i>
                    </sup>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    <sup className='padding-all font-orange-color'>
                        <i className="fas fa-quote-right"></i>
                    </sup>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;