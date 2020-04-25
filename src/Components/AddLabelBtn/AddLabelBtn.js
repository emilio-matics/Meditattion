import React from 'react'

const AddLabelBtn = (props) => {
    return (
        <div className="main-labels-add-btn">
            <span>Add new label</span>
            <img alt="" src={process.env.PUBLIC_URL + "Images/plusS.svg"}></img>
        </div>
    )
}

export default AddLabelBtn;