import React from 'react'
import axios from 'axios'
import * as env from '../../constants'
import FormRegister from '../../components/Forms/Register'
import FormPayment from '../../components/Forms/Payment'
import Loading from '../../components/Loading'

const url_backend = env.URL_BACKEND;

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
            payment: true,
            loading: false,
            displayFormRegister: 'block',
            displayFormPayment: 'none',
            displaySuccessPayment: 'none'
        }

        this.handleChangeFormRegister = this.handleChangeFormRegister.bind(this);
        this.handleSubmitFormRegister = this.handleSubmitFormRegister.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onCancel = this.onCancel.bind(this);
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

    onSuccess(data) {

        const { 
            address,
            city,
            cpf,
            landline,
            lastname,
            name,
            payment,
            phone,
            rg,
            state,
            zip_code
        } = this.state;

        let body = {
            "user": {
                "address": address,
                "city": city,
                "cpf": cpf,
                "landline": landline,
                "lastname": lastname,
                "name": name,
                "payment": payment,
                "phone": phone,
                "rg": rg,
                "state": state,
                "zip_code": zip_code,                
            },
            "payment": data
        };

        console.log('success payment', body)

        axios.post(url_backend + `/usersAdd`, body).then(response => {
            console.log('success user', response)

            this.setState({
                loading: false,
                displayFormPayment: 'none',
                displaySuccessPayment: 'block'
            });

        }).catch(error => {
            console.log(error);
        });
    }

    onCancel(data) {

        // this.setState({
        //     loading: false,
        //     displayFormPayment: 'none',
        //     displaySuccessPayment: 'block'
        // });

        console.log('cancel payment', data)
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
                    onSuccess={(data) => this.onSuccess(data)}
                    onCancel={(data) => this.onCancel(data)}
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