import React from 'react'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import CommonSearch from '../CommonSearch/CommonSearch'
import LabelsContainer from '../LabelsContainer/LabelsContainer'
import AddLabelBtn from '../AddLabelBtn/AddLabelBtn'
import LabelItem from '../LabelItem/LabelItem'



const Labels = (props) => {
    return (
        <div className="main-labels">
            <CommonHeader></CommonHeader>
            <CommonTitle text="Labels"></CommonTitle>
            <CommonSearch></CommonSearch>
            <LabelsContainer></LabelsContainer>
            <AddLabelBtn></AddLabelBtn>
            <LabelsContainer>
                <LabelItem text="item1"></LabelItem>
                <LabelItem text="item2"></LabelItem>
            </LabelsContainer>


        </div>
    )
}

export default Labels;
