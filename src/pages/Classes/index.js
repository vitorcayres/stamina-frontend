import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layout'
import Loading from '../../components/Loading';

export default class Classes extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })

        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
    }

    componentWillUnmount() {
        this.setState({ loading: false })
    }

    render() {
        const { loading } = this.state;

        return (
            <Layout>
                <Loading status={loading} />                
                <div className="site-section" id="classes-section">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-md-8  section-heading">
                                <span className="subheading">Aulas Fitness</span>
                                <h2 className="heading mb-3">Aulas</h2>
                                {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_1.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #1</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_2.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #2</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_3.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #3</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_4.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #4</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_1.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #5</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_1.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #1</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_2.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #2</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_3.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #3</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_4.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #4</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                                <div className="class-item d-flex align-items-center">
                                    <Link to="/my-classes" className="class-item-thumbnail">
                                        <img src="assets/images/img_1.jpg" alt="" />
                                    </Link>
                                    <div className="class-item-text">
                                        <h2><Link to="/my-classes">Aula #5</Link></h2>
                                        <span>Pelo Personal Trainner Teste da Silva</span>, <span>30 minutos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}