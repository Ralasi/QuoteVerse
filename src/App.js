//we need to import react that contains react components
import React from 'react';
//we have to make it to get a certain request from api in terminal using npm install --save axios
//Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6.
import axios from 'axios';

import './App.css';

class App extends React.Component {
  //state is like a global object that conatins all the important thing that comes to specific component
  state = {
    //string a advice which will store here
    advice: '',
  }

  //sort of life cycle method
  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    //advice slip JSON API
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>CLICK FOR NEXT!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;