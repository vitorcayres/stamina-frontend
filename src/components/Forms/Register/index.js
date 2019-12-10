import React from 'react'

export default (props) => {
    return (
        <div className="container" style={{ display: props.display }}>
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-8 section-heading">
                    <h2 className="heading mb-3">Cadastro</h2>
                    <p>Para seguirmos, precisamos que você forneça suas informações no nosso formulario de cadastro:</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form data-aos="fade" onSubmit={props.handleSubmit}>
                        <div className="form-group row">
                            <div className="col-md-6 mb-3 mb-lg-0">
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
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary py-3 px-5 btn-block">PRÓXIMA</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}