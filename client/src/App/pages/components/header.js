import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
    <div>
		<header>
			<div className="container">
				<div className="slider-container">
					<div className="intro-text">
						<div className="intro-lead-in">Welcome To</div>
						<div className="intro-heading">DEVELOPER PORTFOLIO</div>
						<a href="/login"><button className=" btn btn-success">SING IN FOR MORE ...</button> </a>
					</div>
				</div>
			</div>
		</header>
    </div>
    );
  }
}
export default Header;