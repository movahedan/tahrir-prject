import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {}
  
  async componentDidMount() {
    try {
      const res = await axios({
        url: 'polls/questions/',
        method: "get"
      });

      console.log(res)

      this.setState({data: res.data})
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          {this.state.data ? this.state.data[0].question_text : null}
        </header>
      </div>
    );
  }
}

export default App;
