import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Login from '../login/Login';
import httpService from '../../utility/httpService';
import urlFetcher from '../../utility/urlFetcher';
import Paper from 'material-ui/Paper';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  handleClick(event) {
    var data={
        "name": this.state.first_name,
        "email":this.state.email,
        "password":this.state.password,
        "admin": true
    }
    httpService.post({
        url: urlFetcher.getUrl('register'),
        data: data
    }).then((response) => {
        console.log(response);
        if(response.data.code === 200){
            var loginscreen=[];
            loginscreen.push(<Login parentContext={this}/>);
            var loginmessage = "Not Registered yet.Go to registration";
            this.props.parentContext.setState({loginscreen:loginscreen,
            loginmessage:loginmessage,
            buttonLabel:"Register",
            isLogin:true
            });
        }
        })
        .catch((error) => {
        console.log(error);
    });
  }
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <div className="signup-form-container">
            <Paper style={this.props.style}>
                <TextField
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    onChange = {(event,newValue) => this.setState({first_name:newValue})}
                />
                <br/>
                <TextField
                    hintText="Enter your Last Name"
                    floatingLabelText="Last Name"
                    onChange = {(event,newValue) => this.setState({last_name:newValue})}
                />
                <br/>
                <TextField
                    hintText="Enter your Email"
                    type="email"
                    floatingLabelText="Email"
                    onChange = {(event,newValue) => this.setState({email:newValue})}
                    />
                <br/>
                <TextField
                    type = "password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br/>
                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            </Paper>
           </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;