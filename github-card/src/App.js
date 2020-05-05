import React, {Component} from 'react';
import axios from 'axios';
import './App.css';


// const initialData = {
//   name: 'bobby',

// }

class App extends Component {
  state = {
    data: [],
    followerData: []
  }


componentDidMount(){
  axios
  .get("https://api.github.com/users/bobbygondola")
  .then((res) => {
  // console.log(res.data)
  this.setState({data: res.data})
  });



  axios
  .get('https://api.github.com/users/bobbygondola/followers')
  .then((follres) => {
    console.log(follres.data)
    this.setState({followerData: follres.data})
    })
  }


  render() {
  return (
    <div className="app">
        <div className="card">
          <h2>My Github</h2>
      <p>{this.state.data.name}</p>
      <p>Username: {this.state.data.login}</p>
      <p>Bio: {this.state.data.bio}</p>
      <p>Followers: {this.state.data.followers}</p>
      <p>Following: {this.state.data.following}</p>
        </div>
    <div>
      <h2>My Followers</h2>
      {this.state.followerData.map(person => (
        <div className="followcard">
        <p key={person.id}> {person.login}</p>
        <p key={person.id}> {person.id}</p>
        <p key={person.id}> {person.type}</p>
        <p key={person.id}> {person.url}</p>
        </div>
      ))}
    </div>
    </div>
    
  );
}
}

export default App;
