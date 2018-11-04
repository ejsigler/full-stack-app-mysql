import React, { Component } from 'react';
//import { Link } from 'react-router-dom';



class About extends Component {
  render() {
    return (
    <div>

        <section id="about" className="light-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="section-title">
							<h2>ABOUT</h2>
							<hr/>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 text-center">
						<div className="mz-module-about">
						<i class="fa fa-code fa-5x"></i>
							<h3>Web Development</h3>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
						</div>
					</div>
					
					<div className="col-md-4 text-center">
						<div className="mz-module-about">
						<i class="fa fa-cube fa-5x"></i>
							<h3>UI/UX Design</h3>
							<p> Itaque earum rerum hic tenetur a sapiente, ut aut reiciendis maiores</p>
						</div>
					</div>

					<div className="col-md-4 text-center">
						<div className="mz-module-about">
						<i class="fa fa-mobile fa-5x"></i>
							<h3>Web App Development</h3>
							<p> Itaque earum rerum hic tenetur a sapiente, ut aut reiciendis maiores</p>
						</div>
					</div>
				</div>
			</div>
		</section>

     </div>
    );
  }
}
export default About;