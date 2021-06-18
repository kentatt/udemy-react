import React, { Component } from 'react';

function App() {
  return (
    <React.Fragment>
      <label for="bar">bar</label>
      <input type="text" onClick= {() => {console.log("I am clicked!")}} />
    </React.Fragment>
  );
}

export default App;
