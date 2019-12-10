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
            displaySuccessPayment: 'none'
        }

        this.handleChangeFormRegister = this.handleChangeFormRegister.bind(this);
        this.handleSubmitFormRegister = this.handleSubmitFormRegister.bind(this);
        this.handleOnSuccessPayment = this.handleOnSuccessPayment.bind(this);
    }

    handleChangeFormRegister(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmitFormRegister(e) {
        console.log('info user', this.state)

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

    handleOnSuccessPayment(data) {

        this.setState({
            loading: false,
            displayFormPayment: 'none',
            displaySuccessPayment: 'block'
        });

        console.log('success payment', data)
    }

    render() {
        return (
            <>
                <Loading status={this.state.loading} />

                <FormRegister
                    display={this.state.displayFormRegister}
                    handleChange={this.handleChangeFormRegister}
                    handleSubmit={this.handleSubmitFormRegister}
                />

                <FormPayment
                    display={this.state.displayFormPayment}
                    handleChange={this.handleChangeFormRegister}
                    handleSubmit={this.handleSubmitFormRegister}
                    handleOnSuccessPayment={(data) => this.handleOnSuccessPayment(data)}
                />

                <div className="container" style={{ display: this.state.displaySuccessPayment }}>
                    <div className="py-5 text-center">
                        <div className="site-logo mb-3" style={{ color: '#000' }}>Stamina<span style={{ color: '#f23a2e' }}>.</span></div>
                        <h2>Parabéns!</h2>
                        <p className="lead">Você acaba de adquirir o Plano Premium! </p>
                    </div>
                </div>

                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">© 2019 Stamina - Todos os direitos reservados.</p>
                </footer>
            </>
        );
    }
}