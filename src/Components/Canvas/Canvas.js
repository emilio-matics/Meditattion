import React from 'react';
import CommonHeader from '../CommonHeader/CommonHeader'
import ToolBarItem from '../ToolBarItem/ToolBarItem'
import SelectorItem from '../SelectorItem/SelectorItem'

const Canvas = () => {
    return (
        <div className="main-canvas">
            <CommonHeader>
                <div className="main-toolbar">
                    <ToolBarItem type="redo.svg" ></ToolBarItem>
                    <ToolBarItem type="redo.svg"></ToolBarItem>
                    <ToolBarItem type="zoomIn.svg"></ToolBarItem>
                    <ToolBarItem type="zoomOut.svg"></ToolBarItem>
                    <ToolBarItem type="hand.svg"></ToolBarItem>
                    <ToolBarItem type="cursor.svg"></ToolBarItem>
                    <div className="main-toolbar-selectors" >
                        <SelectorItem type="bounding-box.svg"></SelectorItem>
                        <SelectorItem type="pin.svg"></SelectorItem>
                        <SelectorItem type="polygon.svg"></SelectorItem>
                    </div>
                </div>
            </CommonHeader>
            <button className="toggle-labels">
                &#9658;
          </button>
            <button className="toggle-images">
                &#9658;
          </button>
        </div>
    )
}

export default Canvas;
