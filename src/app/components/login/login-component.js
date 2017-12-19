import React, {Component, PropTypes} from 'react';

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {loggedIn: 'false'};
  }

  render() {
    return (
      <div className="main">
        <h1> Login Screen </h1>
      </div>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object
};

export default Login;
