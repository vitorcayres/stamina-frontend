import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layout'
import Loading from '../../components/Loading'

import {
    addUsersClassesByLevel
} from '../../services/UsersClassesByLevel'

export default class Dashboard extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: false
        }
    }

    componentDidMount(){
        this.setState({ loading: true })

        setTimeout(() => {
            this.setState({ loading: false })            
        }, 1000);
    }

    componentWillUnmount(){
        this.setState({ loading: false })
    }

    /**
     * Get Classes By Level 
     */
    async addUsersClassesByLevel(body) {
        try {
            return await addUsersClassesByLevel(body);
        } catch (error) {
            if (error.response) {
                console.log('error api data: ', error.response.data);
            } else if (error.request) {
                console.log('error api request:', error.request)
            } else {
                console.log('error api message:', error.message);
            }
        }
    }

    render() {
        const { loading } = this.state;

        return (
            <Layout>
                <Loading status={loading} />
                <div className="site-section" id="services-section">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5 aos-init aos-animate" data-aos="fade-up">
                            <div className="col-md-8  section-heading">
                                <span className="subheading">Nossas Aulas</span>
                                <h2 className="heading mb-3">Níveis</h2>
                                <p>Veja abaixo os níveis das aulas que nos oferecemos a você:</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay>
                                <Link to="/classes">
                                    <div className="ftco-feature-1">
                                        <span className="icon flaticon-fit" />
                                        <div className="ftco-feature-1-text">
                                            <h2>Iniciante</h2>
                                            {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 mb-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
                                <Link to="/classes">
                                    <div className="ftco-feature-1">
                                        <span className="icon flaticon-gym-1" />
                                        <div className="ftco-feature-1-text">
                                            <h2>Intermediário</h2>
                                            {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 mb-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
                                <Link to="/classes">
                                    <div className="ftco-feature-1">
                                        <span className="icon flaticon-gym" />
                                        <div className="ftco-feature-1-text">
                                            <h2>Avançado</h2>
                                            {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}