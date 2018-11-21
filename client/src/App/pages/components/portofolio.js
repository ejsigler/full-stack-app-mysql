import React, { Component } from 'react';
//import { Link } from 'react-router-dom';



class Portfolio extends Component {
  render() {
    return (
    <div>
      
      <section id="portfolio" className="light-bg">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 text-center">
					<div className="section-title">
						<h2>Portfolio</h2>
						<p>Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for.</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src="images/demo/portfolio-1.jpg" alt="img02" className="img-responsive" />
							<figcaption>
								<h2>ELLIOT & GARRETT</h2>
								<p>Express, Node</p>
								<a href="#" data-toggle="modal" data-target="#Modal-1">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
			
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src="images/demo/portfolio-2.jpg" alt="img02" className="img-responsive" />
							<figcaption>
								<h2>ARIS & SUNIL</h2>
								<p>React JS, Node</p>
								<a href="#" data-toggle="modal" data-target="#Modal-2">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
				
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src="images/demo/portfolio-3.jpg" alt="img02" className="img-responsive" />
							<figcaption>
								<h2>RICHARD & HOWARD</h2>
								<p>Angular, Express Node</p>
								<a href="#" data-toggle="modal" data-target="#Modal-3">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>

            <div className="row">
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src="images/demo/portfolio-1.jpg" alt="img02" className="img-responsive" />
							<figcaption>
                                <h2>RICHARD & HOWARD</h2>
								<p>Angular, Express Node</p>
								<a href="#" data-toggle="modal" data-target="#Modal-1">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
			
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src="images/demo/portfolio-2.jpg" alt="img02" className="img-responsive" />
							<figcaption>
                                <h2>ARIS & SUNIL</h2>
								<p>React JS, Node</p>
								<a href="#" data-toggle="modal" data-target="#Modal-2">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
				
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src="images/demo/portfolio-3.jpg" alt="img02" className="img-responsive" />
							<figcaption>
                                <h2>ELLIOT & GARRETT</h2>
								<p>Express, Node</p>
								<a href="#" data-toggle="modal" data-target="#Modal-3">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>

          </div>
		</section>

    </div>
    );
  }
}
export default Portfolio;