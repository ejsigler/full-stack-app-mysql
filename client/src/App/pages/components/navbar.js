import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Navheader extends Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header page-scroll">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand page-scroll" href="../#page-top">Dev. <span className="brand">Portfolio</span></a>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li className="hidden">
							<a href="#page-top"></a>
						</li>
						<li>
							<a className="page-scroll" href="../#about">ABOUT US</a>
						</li>
						<li>
							<a className="page-scroll" href="../#portfolio">PORTFOLIO</a>
						</li>
						<li>
							<a className="page-scroll" href="../#team">TEAM</a>
						</li>
						<li>
						<a href="../profile">PROFILE</a>
						</li>
						<li>
						<a href="/signup" className="page-scroll">SIGN UP</a>
						</li>
						<li>
						<a href="/" className="page-scroll">LOGOUT</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    </div>
    );
  }
}
export default Navheader;