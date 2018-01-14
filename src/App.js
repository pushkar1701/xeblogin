import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import logo from './logo.svg';
import './App.css';
import Loginscreen from './components/login/LoginScreen'

injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }


  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
      loginPage:loginPage
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;
