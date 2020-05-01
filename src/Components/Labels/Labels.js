import React from 'react'
import { useSelector } from 'react-redux'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import CommonSearch from '../CommonSearch/CommonSearch'
import LabelsContainer from '../LabelsContainer/LabelsContainer'
import AddLabelBtn from '../AddLabelBtn/AddLabelBtn'
import LabelItem from '../LabelItem/LabelItem'



const Labels = (props) => {
    const labelsIsVisible = useSelector(state => state.Toggles.labelsVisible);


        return (
            <div className={labelsIsVisible ? 'main-labels' : 'main-labels hide'}>
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



        // <div className="main-labels">
        

    
}

export default Labels;
