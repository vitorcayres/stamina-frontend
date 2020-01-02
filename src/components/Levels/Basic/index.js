import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="col-lg-4 mb-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay>
            <Link to={`/classes/${props.id}`}>
                <div className="ftco-feature-1">
                    <span className="icon flaticon-fit" />
                    <div className="ftco-feature-1-text">
                        <h2>Iniciante</h2>
                        {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                    </div>
                </div>
            </Link>
        </div>
    );
}