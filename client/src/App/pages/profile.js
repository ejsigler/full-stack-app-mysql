import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import School from './profileknowledge';
import Courses from './courses';
import PE from './pastEmployments';
import CE from './currentEmployment';
import Contact from './contact';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
            userAction: '',
            userName: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        this.setState({ userAction: ev.target.name }, () => {
            console.log(this.state.userAction);
            this.setState({ userName: 'mukuns' });
        })
        ev.preventDefault();

        console.log(this.state.userName);

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
        data.append('userName', this.state.userName);

        if (this.state.userAction === 'upload') {
            fetch('/users/profilePic/upload', {
                mode: 'cors',
                method: 'POST',
                body: data,
            }).then((response) => {
                response.json().then((body) => {
                    this.setState({ imageURL: `/${body.file}` });
                })
            })
        } else if (this.state.userAction === 'replace') {
            fetch('/users/profilePic/replace', {
                mode: 'cors',
                method: 'POST',
                body: data,
            }).then((response) => {
                response.json().then((body) => {
                    this.setState({ imageURL: `/${body.file}` });
                })
            })
        } else if (this.state.userAction === 'delete') {
            //console.log(this.state.userName);
            fetch('/users/profilePic/delete', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: this.state.userName })
            }).then(() => {
                this.setState({ imageURL: `` })
            })
        }

    }

    render() {
     return (
         <div className='container'>
            <School />
            <Courses />
            <PE />
            <CE />
            <Contact />
            <Link to={'./logout'}>
            <button className='logout'>Logout</button>
            </Link>
            <div className='container'>
                <a href='/logout'>Logout</a>
                <form>
                    <div>
                        <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                    </div>
                    <div>
                        <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
                    </div>
                    <br />
                    <div>
                        <button name="upload" onClick={this.handleSubmit}>Upload</button>
                        <button name="replace" onClick={this.handleSubmit}>Replace</button>

                    </div>
                    <img src={this.state.imageURL} alt="img" />
                </form>
                <button name="delete" onClick={this.handleSubmit}>Delete</button>
            </div>
         </div>
     )
 }   
}
export default Profile;