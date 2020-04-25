import React, { useState, Fragment, useCallback } from 'react'
import Slider from 'react-slick'

import settings from './SliderSettings'
import images from './FoodJointsImg'

const FoodJoints = () => {

    const [imagesArray, setImagesArray] = useState(images)
    const [nextCount, setNextCount] = useState(0)
    const [previousCount, setPreviousCount] = useState(8)
    const [nextImageDisplay, setNextImageDisplay] = useState(images[0])

    const nextImageQueue = useCallback(() => {
        let nextImage = images[nextCount]
        if (nextCount + 1 <= imagesArray.length) {
            setNextCount(prevCount => prevCount + 1)
            setNextImageDisplay(nextImage)
        }
    })

    const previousImageQueue = useCallback(() => {
        let previousImage = images[previousCount - 1]
        if (previousCount > 0) {
            setNextImageDisplay(previousImage)
        }
        setPreviousCount(prevCount => prevCount - 1)
    })

    return (
        <div className='food-section'>
            <div
                className='margin-five food-joint-section'
                style={{
                    transform: `
                    translateX(-${(nextImageDisplay.id) * (100 / (imagesArray.length))}%)
                    `
                }}
            >
                {imagesArray.map((item, index) => {
                    return <div
                        className='p-relative'
                        key={item.key}
                    >
                        <img
                            src={item.require}
                            alt={item.alt}
                            height={item.height}
                            width={item.width}
                        />
                        <div className='section-image-description'>{item.alt}</div>
                    </div>
                })}
            </div>
            <div className='image-display-block'>
                <button
                    disabled={previousCount === 1}
                    className='image-display-btn' onClick={previousImageQueue}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button
                    disabled={nextCount === imagesArray.length}
                    className='image-display-btn' onClick={nextImageQueue}
                >
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default FoodJoints;