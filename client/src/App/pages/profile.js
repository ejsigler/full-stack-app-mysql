import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import School from './profileknowledge';
import Courses from './courses';
import PE from './pastEmployments';
import CE from './currentEmployment';
import Contact from './contact';

class Profile extends Component {

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
         </div>
     )
 }   
}
export default Profile;