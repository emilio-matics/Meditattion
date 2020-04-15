import React from 'react'
import Completed from '../Completed/Completed'

const ImageItem = () => {
    return (
        <div className="main-images-item">
            <img alt="" src={process.env.PUBLIC_URL + "/Images/dummy.jpg"}></img>
            <Completed></Completed>
        </div>
    )
}

export default ImageItem;