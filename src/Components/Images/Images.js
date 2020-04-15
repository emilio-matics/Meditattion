import React from 'react'
import ImageItem from '../ImageItem/ImageItem'

const Images = () => {
    return (
        <div className="main-images">
            <div className="common-header">

            </div>
            <div className="common-title">
                Images
            </div>
            <div className="main-images-container">
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
            </div>
        </div>
    )
}

export default Images;
