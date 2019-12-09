import React from 'react'
// import { PayPalButton } from 'react-paypal-button-v2'

export default class Payment extends React.Component {

    constructor(){
        super();

        this.state = {
            name: null,
            lastname: null,
            address: null,
            city: null,
            zip_code: null,
            landline: null,
            phone: null,
            cpf: null,
            rg: null,
            payment: null
        }
    }

    render() {
        return (
            <div className="site-section bg-light contact-wrap">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-8 section-heading">
                            <h2 className="heading mb-3">Formulario</h2>
                            <p>Para seguirmos, precisamos que você forneça suas informações no nosso formulario de cadastro:</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
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
                                        <input type="text" className="form-control" placeholder="Endereço" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4 mb-3 mb-lg-0">
                                        <input type="text" className="form-control" placeholder="CEP" />
                                    </div>
                                    <div className="col-md-4 mb-3 mb-lg-0">
                                        <input type="text" className="form-control" placeholder="Cidade" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" placeholder="Estado" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 mb-3 mb-lg-0">
                                        <input type="text" className="form-control" placeholder="RG" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="CPF" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 mb-3 mb-lg-0">
                                        <input type="text" className="form-control" placeholder="Telefone" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Celular" />
                                    </div>
                                </div>
                                {/* <div className="form-group row">
                                    <div className="col-md-12">
                                        <p>Pagamento</p>
                                        <PayPalButton
                                            amount="88.60"
                                            onSuccess={(details, data) => {
                                                console.log(details, data)
                                            }}
                                            options={{
                                                clientId: "AWsEZXDJ9bmY1hLtL7Z4c_GtLvHV3gmRM41TdlS-u042Cfa7f0ji_Mn-OLTLB8BYS2BsA_qVt6JiVIhZ",
                                                currency: "BRL"
                                            }}
                                        />
                                    </div>
                                </div> */}
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary py-3 px-5 btn-block">PRÓXIMA</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}