import React from 'react'

export default (props) => {
    return (
        <div className="container" style={{ display: props.display }}>
            <div className="py-5 text-center">
                <div className="site-logo mb-3" style={{ color: '#000' }}>Stamina<span style={{ color: '#f23a2e' }}>.</span></div>
                <h2>Formulário de Cadastro</h2>
                <p className="lead">Para seguirmos, precisamos que você forneça suas informações no nosso formulario de cadastro:</p>
            </div>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Seu carrinho</span>
                        <span className="badge badge-secondary badge-pill">1</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Plano Premium</h6>
                                <small>3 niveis de aula</small>
                            </div>
                            <span className="text-success">R$ 1,00 / ano</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>R$ 1,00</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Dados Cadastrais</h4>
                    <form data-aos="fade" onSubmit={props.handleSubmit}>
                        <div className="form-group row">
                            <div className="col-md-6 mb-3 mb-lg-0">
                                <label htmlFor="">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={props.name}
                                    onChange={props.handleChange}
                                    placeholder="Nome"
                                    required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">Sobrenome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastname"
                                    value={props.lastname}
                                    onChange={props.handleChange}
                                    placeholder="Sobrenome"
                                    required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="">Endereço</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={props.address}
                                    onChange={props.handleChange}
                                    placeholder="Endereço"
                                    required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-4 mb-3 mb-lg-0">
                                <label htmlFor="">CEP</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="zip_code"
                                    value={props.zip_code}
                                    onChange={props.handleChange}
                                    placeholder="CEP"
                                    required />
                            </div>
                            <div className="col-md-4 mb-3 mb-lg-0">
                                <label htmlFor="">Cidade</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    value={props.city}
                                    onChange={props.handleChange}
                                    placeholder="Cidade"
                                    required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Estado</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="state"
                                    value={props.state}
                                    onChange={props.handleChange}
                                    placeholder="Estado"
                                    required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6 mb-3 mb-lg-0">
                                <label htmlFor="">RG</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="rg"
                                    value={props.rg}
                                    onChange={props.handleChange}
                                    placeholder="RG"
                                    required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">CPF</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cpf"
                                    value={props.cpf}
                                    onChange={props.handleChange}
                                    placeholder="CPF"
                                    required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6 mb-3 mb-lg-0">
                                <label htmlFor="">Telefone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="landline"
                                    value={props.landline}
                                    onChange={props.handleChange}
                                    placeholder="Telefone"
                                    required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">Celular</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={props.phone}
                                    onChange={props.handleChange}
                                    placeholder="Celular"
                                    required />
                            </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary py-3 px-5 btn-block">CADASTRAR</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}