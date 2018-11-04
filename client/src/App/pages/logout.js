import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    render() {
        return (
            <div className='container'>
            <Link to={'/'}>
            <button className='phoneHome'>Home</button>
            </Link>
            </div>
        )
    }
}

export default Logout;

