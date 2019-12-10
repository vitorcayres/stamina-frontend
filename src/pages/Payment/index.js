import React from 'react'
import FormRegister from '../../components/Forms/Register'
import FormPayment from '../../components/Forms/Payment'
import Loading from '../../components/Loading'

export default class Register extends React.Component {

    constructor() {
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
            payment: null,
            loading: false,
            displayFormRegister: 'block',
            displayFormPayment: 'none',            
        }

        this.handleChangeFormRegister = this.handleChangeFormRegister.bind(this);
        this.handleSubmitFormRegister = this.handleSubmitFormRegister.bind(this);
    }

    handleChangeFormRegister(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmitFormRegister(e) {
        console.log(this.state)

        this.setState({ loading: true });

        setTimeout(() => {
            this.setState({ 
                loading: false,
                displayFormRegister: 'none',
                displayFormPayment: 'block'                
             });
         }, 2000);

        e.preventDefault();
    }

    render() {
        return (
            <>
            <Loading status={this.state.loading} />
            <div className="site-section bg-light contact-wrap">
                <FormRegister
                    display={this.state.displayFormRegister}
                    handleChange={this.handleChangeFormRegister}
                    handleSubmit={this.handleSubmitFormRegister}
                />
                <FormPayment
                    display={this.state.displayFormPayment}
                    handleChange={this.handleChangeFormRegister}
                    handleSubmit={this.handleSubmitFormRegister}
                />
            </div>
            </>
        );
    }
}