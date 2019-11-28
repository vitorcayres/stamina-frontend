import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layout'

export default () => {
    return (
        <Layout>
            <a href="/#" id="bgndVideo" className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=w-cRWOjlk8c',showYTLogo:false, showAnnotations: false, showControls: false, cc_load_policy: false, containment:'#home-section',autoPlay:true, mute:true, startAt:255, stopAt: 271, opacity:1}">
            </a>
            <div className="intro-section" id="home-section" style={{ backgroundColor: '#ccc' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
                            <h1 className="mb-3">Emagreça, fique em forma!</h1>
                            <p className="lead mx-auto desc mb-5">Exercícios SMART estão ajudando pessoas comuns a emagrecer, venha conhecer como!</p>
                            <p className="text-center">
                                <Link to="/dashboard" className="btn btn-outline-white py-3 px-5">Vamos começar!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-8 section-heading">
                            <span className="subheading">Mantenha-se saudável</span>
                            <h2 className="heading mb-3">Obtenha um corpo perfeito</h2>
                            <p>O exercício físico é qualquer atividade que mantém ou aumenta a aptidão física em geral, e tem o objetivo de alcançar a saúde e também a recreação.
                                A razão da prática de exercícios inclui: o reforço da musculatura e do sistema cardiovascular; o aperfeiçoamento das habilidades atléticas; a perda de peso e/ou a manutenção de alguma parte do corpo.</p>
                        </div>
                    </div>
                    <div className="owl-carousel nonloop-block-14 block-14" data-aos="fade">
                        <div className="slide">
                            <div className="ftco-feature-1">
                                <span className="icon flaticon-fit" />
                                <div className="ftco-feature-1-text">
                                    <h2>Estar em Forma</h2>
                                    <p>O termo “boa forma” pode estar relacionado a vários significados, como um corpo harmônico, musculoso ou magro; boa aceitação do corpo, mesmo em situações nas quais a forma física contraria os padrões estéticos impostos pela sociedade.</p>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="ftco-feature-1">
                                <span className="icon flaticon-gym-1" />
                                <div className="ftco-feature-1-text">
                                    <h2>Musculação</h2>
                                    <p>A musculação é um tipo de exercício realizado com pesos de diversas cargas, amplitude e tempo de contração, o que faz dela uma atividade física indicada para pessoas de diversas idades e com diferentes objetivos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="ftco-feature-1">
                                <span className="icon flaticon-gym" />
                                <div className="ftco-feature-1-text">
                                    <h2>Exercícios FIsicos</h2>
                                    <p>Além dos exercícios físicos para musculação, é importante também lembrar que a alimentação irá pesar nos seus resultados, portanto é extremamente importante ter uma alimentação saudável, e rica em proteínas!</p>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="ftco-feature-1">
                                <span className="icon flaticon-vegetables" />
                                <div className="ftco-feature-1-text">
                                    <h2>Alimentação saudavel</h2>
                                    <p>Uma alimentação saudável também é essencial nos demais períodos do dia, por meio do fracionamento das refeições, do consumo adequado de frutas, verduras e legumes e da baixa ingestão de alimentos ricos em gordura e açúcar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="ftco-feature-1">
                                <span className="icon flaticon-stationary-bike" />
                                <div className="ftco-feature-1-text">
                                    <h2>Benefícios da Corrida</h2>
                                    <p>A corrida é um dos exercícios físicos mais eficientes para quem quer perder peso com saúde. Correr acelera o metabolismo, fazendo a queima de calorias acontecer mais eficientemente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bgimg" style={{ backgroundImage: 'url("assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-7">
                            <h2>Obtenha o resultado desejado! (;</h2>
                            {/* <p class="lead mx-auto desc mb-5">A new free template for fitness website template created with love by the fine folks
at <a href="https://free-template.co" target="_blank">Free-Template.co</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section" id="trainer-section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
                        <div className="col-md-8  section-heading">
                            <span className="subheading">Personal Trainers</span>
                            <h2 className="heading mb-3">Todos os professores</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay>
                            <div className="person">
                                <img src="assets/images/person_1.jpg" alt="Free website template by Free-Template.co" className="img-fluid" />
                                <h3>Justin Daniel</h3>
                                <p className="position">Trainer</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay={100}>
                            <div className="person">
                                <img src="assets/images/person_3.jpg" alt="Free website template by Free-Template.co" className="img-fluid" />
                                <h3>Matthew Davidson</h3>
                                <p className="position">Trainer</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay={200}>
                            <div className="person">
                                <img src="assets/images/person_2.jpg" alt="Free website template by Free-Template.co" className="img-fluid" />
                                <h3>Matthew Davidson</h3>
                                <p className="position">Trainer</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bgimg" style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-7">
                            <h2>O seu parceiro de fitness onde quer que esteja! (;</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-light contact-wrap" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-8  section-heading">
                            {/* <span class="subheading">Get In Touch</span> */}
                            <h2 className="heading mb-3">Contato</h2>
                            {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <form method="post" data-aos="fade">
                                <div className="form-group row">
                                    <div className="col-md-6 mb-3 mb-lg-0">
                                        <input type="text" className="form-control" placeholder="Nome" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Sobrenome" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Assunto" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <textarea className="form-control" cols={30} rows={10} placeholder="Digite aqui sua mensagem." defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <input type="submit" className="btn btn-primary py-3 px-5 btn-block" defaultValue="Enviar Mensagem" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}