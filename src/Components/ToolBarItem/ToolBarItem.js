import React from 'react'


const ToolBarItem = (props) => {
    return (
        <div className="main-toolbar-tool">
            <img alt="" src={process.env.PUBLIC_URL + `Images/${props.type}`}></img>
        </div>
    )
}

export default ToolBarItem;
