import React from 'react'
// import { Link } from 'react-router-dom'
import Layout from '../../layout'

export default () => {
    return (
        <Layout>
            <div className="bgimg" style={{ backgroundImage: 'url("assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-7">
                            <h2>Aula 1</h2>
                            <h2>Video rolando</h2>
                            {/* <p className="lead mx-auto desc mb-5">A new free template for fitness website template created with love by the
                            fine folks at <a href="https://free-template.co" target="_blank">Free-Template.co</a></p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic
                                country, in which roasted parts of sentences fly into your mouth.</p>
                            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious
                            Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made
                            herself on the way.</p>
                        </div>
                        <div className="col-lg-6">
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however
                                a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                            <div className="ul-check list-unstyled success">
                                <li>Even the see Pointing has no control</li>
                                <li>Lorem Ipsum decided to leave for</li>
                                <li>The far World of Grammar</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    );
}