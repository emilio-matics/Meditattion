import React from 'react'
import Labels from '../Labels/Labels'
import Canvas from '../Canvas/Canvas'
import Images from '../Images/Images'

const Main = () => {
    return (
        <div className="main">
            <Labels></Labels>
            <Canvas></Canvas>
            <Images></Images>
        </div>
    )
}

export default Main;
