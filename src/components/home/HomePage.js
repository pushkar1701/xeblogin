import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div>
        <div className='jumbotron'>
          <h1>Pushkar Kathuria</h1>
          <Link to='About' className='btn btn-primary btn-lg'>About</Link>
        </div>
      </div>
    )
  }
}

export default HomePage;