import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./users'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      <Link to={'./login'}>
      <button className='Login'>Login</button>
      </Link>
      <Link to={'./signup'}>
      <button className='Signup'>Sign Up</button>
      </Link>
    </div>
    );
  }
}
export default Home;