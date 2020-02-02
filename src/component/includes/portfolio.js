import React from 'react';

import { Link } from 'react-router-dom';


export const PortfolioInclude = () => {
    return (
        <React.Fragment>
            <section className="portfolio-area section-gap" id="portfolio">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-70 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">Our Latest Featured Projects</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="filters-content">
                        <div className="row grid">
                            <div className="single-portfolio col-sm-4 all vector">
                                <div className="relative">
                                    <div className="thumb">
                                        <div className="overlay overlay-bg"></div>
                                        <img className="image img-fluid" src={require('../../assets/p1.jpg')} alt="" />
                                    </div>
                                    <a href="javascript:;" className="img-pop-up">
                                        <div className="middle">
                                            <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-inner">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">vector</div>
                                </div>
                            </div>
                            <div className="single-portfolio col-sm-4 all raster">
                                <div className="relative">
                                    <div className="thumb">
                                        <div className="overlay overlay-bg"></div>
                                        <img className="image img-fluid" src={require('../../assets/p2.jpg')} alt="" />
                                    </div>
                                    <a href="img/p2.jpg" className="img-pop-up">
                                        <div className="middle">
                                            <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-inner">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">vector</div>
                                </div>
                            </div>
                            <div className="single-portfolio col-sm-4 all ui">
                                <div className="relative">
                                    <div className="thumb">
                                        <div className="overlay overlay-bg"></div>
                                        <img className="image img-fluid" src={require('../../assets/p3.jpg')} alt="" />
                                    </div>
                                    <a href="img/p3.jpg" className="img-pop-up">
                                        <div className="middle">
                                            <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                                        </div>
                                    </a>

                                </div>
                                <div className="p-inner">
                                    <h4>Creative Poster Design</h4>
                                    <div className="cat">Agency</div>
                                </div>
                            </div>
                            <div className="single-portfolio col-sm-4 all printing">
                                <div className="relative">
                                    <div className="thumb">
                                        <div className="overlay overlay-bg"></div>
                                        <img className="image img-fluid" src={require('../../assets/p4.jpg')} alt="" />
                                    </div>
                                    <a href="img/p4.jpg" className="img-pop-up">
                                        <div className="middle">
                                            <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-inner">
                                    <h4>Embosed Logo Design</h4>
                                    <div className="cat">Portal</div>
                                </div>
                            </div>
                            <div className="single-portfolio col-sm-4 all vector">
                                <div className="relative">
                                    <div className="thumb">
                                        <div className="overlay overlay-bg"></div>
                                        <img className="image img-fluid" src={require('../../assets/p5.jpg')} alt="" />
                                    </div>
                                    <a href="img/p5.jpg" className="img-pop-up">
                                        <div className="middle">
                                            <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-inner">
                                    <h4>3D Helmet Design</h4>
                                    <div className="cat">vector</div>
                                </div>
                            </div>
                            <div className="single-portfolio col-sm-4 all raster">
                                <div className="relative">
                                    <div className="thumb">
                                        <div className="overlay overlay-bg"></div>
                                        <img className="image img-fluid" src={require('../../assets/p6.jpg')} alt="" />
                                    </div>
                                    <a href="img/p6.jpg" className="img-pop-up" >
                                        <div className="middle">
                                            <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                                        </div>						</a>
                                </div>
                                <div className="p-inner">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">raster</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}