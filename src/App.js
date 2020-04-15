import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="main-labels">
          <div className="common-header">
          </div>
          <div className="common-title"></div>
          <div className="common-search"></div>
        </div>
        <div className="main-canvas">
          <div className="common-header"></div>
          <button className="toggle-labels">
            &#9658;
          </button>
          <button className="toggle-images">
            &#9658;
          </button>
        </div>
        <div className="main-images">
          <div className="common-header"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
