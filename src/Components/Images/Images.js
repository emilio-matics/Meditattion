import React from 'react'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import ImagesContainer from '../ImagesContainer/ImagesContainer'

const Images = (props) => {
    return (
        <div className="main-images">
            <CommonHeader></CommonHeader>
            <CommonTitle text="Images"></CommonTitle>
            <ImagesContainer></ImagesContainer>
        </div>
    )
}

export default Images;
