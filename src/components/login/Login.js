import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import httpService from '../../utility/httpService';
import urlFetcher from '../../utility/urlFetcher';
import Paper from 'material-ui/Paper';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  handleClick(event) {
    httpService.post({
      url: urlFetcher.getUrl('authenticate')
    }).then((response) => {
      console.log(response);
      if(response.data.success){
        console.log("Login successfull");
      }
      else{
        console.log("User does not exist, Please register first");
        alert("User does not exist, Please register first");
      }
    })
    .catch((error) => {
      console.log(error);
    });;
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
            title="Login"
          />
          <div className="login=form-container">
            <Paper style={this.props.style}>
                <TextField
                  hintText="Enter your Username"
                  floatingLabelText="Username"
                  onChange = {(event,newValue) => this.setState({username:newValue})}
                />
                <br/>
                <TextField
                  type="password"
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
export default Login;