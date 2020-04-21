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
        </div>
    )
}

export default Labels;
