import React, {PropTypes} from 'react';
import Header from './shared/Header.js';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div className='container-fluid'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App;