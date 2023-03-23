import React, {Component} from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">    
//       </header>
//     </div>
//   );
// }

class App extends Component {
  
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return(
      <div>
      <h2>Counter App</h2>
      <button onClick={this.increment}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default App;
