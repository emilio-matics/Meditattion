import React from 'react'

const Images = () => {
    return (
        <div className="main-images">
            <div className="common-header">

            </div>
            <div className="common-title">
                Images
            </div>
            <div className="main-images-container">
                <div className="main-images-item">
                    <img alt="" src={process.env.PUBLIC_URL + "/Images/dummy.jpg"}></img>
                </div>
                <div className="main-images-item">
                    <img alt="" src={process.env.PUBLIC_URL + "/Images/dummy.jpg"}></img>
                    <div className="main-images-item-completed">1</div>
                </div>
                <div className="main-images-item">
                    <img alt="" src={process.env.PUBLIC_URL + "/Images/dummy.jpg"}></img>
                </div>
                <div className="main-images-item">
                    <img alt="" src={process.env.PUBLIC_URL + "/Images/dummy.jpg"}></img>
                </div>
                <div className="main-images-item">
                    <img alt="" src={process.env.PUBLIC_URL + "/Images/dummy.jpg"}></img>
                </div>
                <div className="main-images-item">
                    <img alt="" src={process.env.PUBLIC_URL + "/Images/dummy.jpg"}></img>
                </div>
            </div>
        </div>
    )
}

export default Images;
