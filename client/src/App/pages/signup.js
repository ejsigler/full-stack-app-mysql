import React, { Component } from 'react';
import Navbar from './components/navbar';
// import Footer from './components/footer';

class Signup extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    {/* <Navbar /> */}
                    <form action="/signup" method="post">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password"></input>
                        </div>

                        <button type="submit" className="btn btn-warning btn-lg">Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;