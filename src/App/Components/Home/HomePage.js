import React from 'react'

import Header from './HomePageHeader/Header'
import Section from './HomePageBody/Section'
import Footer from './HomePageFooter/Footer'

const HomePage = () => {
    return (
        <div className='width-100'>
            <Header />
            <Section />
            <Footer />
        </div>
    );
}

export default HomePage;