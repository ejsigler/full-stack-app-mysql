import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';

class Login extends Component {
    render() {
        return (
            
            <div class='form-box'>
            <Navbar/>
                <form action="/login" method="post">
                   <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" name="email"></input>
                   </div>
                   <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password"></input>
                   </div>

                   <button type="submit" class="btn btn-warning btn-lg">Login</button>
                </form>
                <p>Need an account? <Link to={'./signup'}>
                    <button variant="raised">
                        Sign Up
                    </button>
                </Link></p>
                <p>Or go <Link to={'./'}>
                    <button>Home</button>
                    </Link></p>
            </div>

        )
    }
}
export default Login;