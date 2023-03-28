import React, { Component } from 'react';
import axios from 'axios'
import Loading from './Loading'

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

class  App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false
    }

    // bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUser() {
    this.setState({
      loading: true
    })
    
    axios('https://api.randomuser.me/?nat=US&results=5') // .then(response => console.log(response))
    .then(response => 
      this.setState({
      // users: response.data.results,
      users: [ ...this.state.users, ...response.data.results],
      loading: false
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUser();
    console.log("Add users.")
  }

  componentWillMount(){
    this.getUser();
  }

  render() {
    const {loading, users} = this.state; // refactor by destructuring this.state

    return(
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users" />
        </form>
        <hr /> 
        { !loading ?
          users.map(user => (
        <div key={user.id.value}>
          <h3 style={{color: "green"}}>{user.name.first}</h3>
          <p>{user.email}</p>
          <hr />      
        </div>
        )) : ( <Loading message='Wait a bit...'/>) // "Loading"         
      }        
      </div>
    );
  }
}

export default App;
