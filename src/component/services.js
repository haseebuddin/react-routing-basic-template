import React from 'react';
// import './App.css'
import {Servicesfold} from './includes/servicesfold';
import {Footer} from './includes/footer';
export const ServicesComponent = () => {
    return (
        <React.Fragment>
            <section className="relative about-banner">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Services
							</h1>
                        </div>
                    </div>
                </div>
            </section>
            <Servicesfold/>
            
        </React.Fragment>
    )
}
