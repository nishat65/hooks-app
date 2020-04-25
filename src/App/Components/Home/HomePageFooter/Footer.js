import React from 'react'

const Footer = () => {
    return (
        <footer className='home-page-footer'>
            <div>
                <ul>
                    <li className='pointer'>About us</li>
                    <li className='pointer'>Blog</li>
                    <li className='pointer'>Press</li>
                    <li className='pointer'>iOS App</li>
                    <li className='pointer'>Android App</li>
                </ul>
                <ul className='footer-icon'>
                    <li className='pointer'><i className="fab fa-google"></i></li>
                    <li className='pointer'><i className="fab fa-facebook-f"></i></li>
                    <li className='pointer'><i className="fab fa-twitter"></i></li>
                    <li className='pointer'><i className="fab fa-instagram"></i></li>
                </ul>
            </div>
            <div className='footer-copyright'>
                <p>
                    Copyright <sup>&copy;</sup> 2020 by Travel App. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer