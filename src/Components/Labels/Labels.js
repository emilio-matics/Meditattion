import React from 'react'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import CommonSearch from '../CommonSearch/CommonSearch'
import LabelsContainer from '../LabelsContainer/LabelsContainer'


const Labels = (props) => {
    return (
        <div className="main-labels">
            <CommonHeader></CommonHeader>
            <CommonTitle text="Labels"></CommonTitle>
            <CommonSearch></CommonSearch>
            <LabelsContainer></LabelsContainer>
            <div className="main-labels-add-btn">
                <span>Add new label</span>
                <img  alt="" src={process.env.PUBLIC_URL + "Images/plusS.svg"}></img>
            </div>
        </div>
    )
}

export default Labels;
