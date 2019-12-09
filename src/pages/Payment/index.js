import React from 'react'
// import { PayPalButton } from 'react-paypal-button-v2'
import FormPayment from '../../components/Forms/Payment'

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

        this.handleChangeFormPayment = this.handleChangeFormPayment.bind(this);
        this.handleSubmitFormPayment = this.handleSubmitFormPayment.bind(this);
    }

    handleChangeFormPayment(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmitFormPayment(e) {
        console.log(this.state)
        e.preventDefault();
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
                            <FormPayment 
                                handleChange={this.handleChangeFormPayment}
                                handleSubmit={this.handleSubmitFormPayment}                            
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}