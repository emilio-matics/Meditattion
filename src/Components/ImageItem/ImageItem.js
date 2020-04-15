import React from 'react'
import Completed from '../Completed/Completed'

const ImageItem = (props) => {
    return (
        <div className="main-images-item">
            <img alt="" src={process.env.PUBLIC_URL + props.source}></img>
            {props.completed==="true" && <Completed></Completed>}
        </div>
    )
}

export default ImageItem;