import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import School from './profileknowledge';
import Courses from './courses';
import PE from './pastEmployments';
import CE from './currentEmployment';
import Contact from './contact';
import Navbar from './components/navbar';
import Footer from './components/footer';


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
            <div>

                <div className='container'>
                    <Navbar />
                    <School />
                    <Courses />
                    <PE />
                    <CE />
                    <Contact />
                    {/* <Link to={'./logout'}>
            <button className='logout'>Logout</button>
        </Link> */}
                    <div>
                        {/* <a href='/logout'>Logout</a> */}
                        <form>
                            <input id="file-upload" className="text-center" ref={(ref) => { this.uploadInput = ref; }} type="file" />
                            <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter desired name" />
                            <br />
                            <br />
                        </form>
                    </div>
                </div>
                            <div>
                                <button id="upload-image" name="upload" onClick={this.handleSubmit}>UPLOAD</button>
                                <button id="replace-image" name="replace" onClick={this.handleSubmit}>REPLACE</button>
                                <button id="delete-image" name="delete" onClick={this.handleSubmit}>DELETE</button>
                            </div>
                            <img id="profile-pic" src={this.state.imageURL} alt="profile pic" />
                <Footer />
            </div>
        )
    }
}
export default Profile;