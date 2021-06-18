import React, { Component } from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick= {() => {console.log("I am clicked!")}} />
//     </React.Fragment>
//   );
// }

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0 }
  }

  handlePlusButtun = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButtun = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButtun}>+1</button>
        <button onClick={this.handleMinusButtun}>-1</button>
      </React.Fragment>
    )
  }

}


export default App;
