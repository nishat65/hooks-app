import React from 'react'

const Footer = () => {
    return (
        <footer className='home-page-footer'>
            <div>
                <ul>
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Press</li>
                    <li>iOS App</li>
                    <li>Android App</li>
                </ul>
                <ul className='footer-icon'>
                    <li><i className="fab fa-google"></i></li>
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                </ul>
            </div>
            <div className='footer-copyright'>
                <p>
                    Copyright <sup>&copy;</sup> 2020 by Travel-App. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer