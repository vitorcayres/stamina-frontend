import React from 'react'
import FormRegister from '../../components/Forms/Register'
import FormPayment from '../../components/Forms/Payment'
import Loading from '../../components/Loading'

import {
    addUsers
} from '../../services/Users'

import {
    getClassesByLevel
} from '../../services/ClassesByLevel'

import {
    addUsersClassesByLevel
} from '../../services/UsersClassesByLevel'

export default class Payment extends React.Component {

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
            pay: true,
            loading: false,
            displayFormRegister: 'block',
            displayFormPayment: 'none',
            displaySuccessPayment: 'none'
        }

        this.handleChangeFormRegister = this.handleChangeFormRegister.bind(this);
        this.handleSubmitFormRegister = this.handleSubmitFormRegister.bind(this);
        this.onPaymentStart = this.onPaymentStart.bind(this);
        this.onPaymentSuccess = this.onPaymentSuccess.bind(this);
    }

    /**
     * Get Classes By Level 
     */
    async getClassesByLevel() {
        try {
            return await getClassesByLevel();
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

    handleChangeFormRegister(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmitFormRegister(e) {
        console.log('info user:', this.state)

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

    onPaymentStart() {
        this.setState({ loading: true });
    }

    onPaymentSuccess(data) {

        const {
            name,
            lastname,
            address,
            city,
            zip_code,
            landline,
            phone,
            cpf,
            rg,
            pay
        } = this.state;

        const body = {
            name: name,
            lastname: lastname,
            address: address,
            city: city,
            zip_code: zip_code,
            landline: landline,
            phone: phone,
            cpf: cpf,
            rg: rg,
            pay: pay
        };

        let that = this;

        addUsers(body).then(response => {
            console.log('user info:', response.data)
        })
        .then(() => this.getClassesByLevel())
        .then(response => {
            console.log('get classes by level:', response.data)
            let body = { phone: phone, data: response.data }
            return body;
        }).then(body => this.addUsersClassesByLevel(body))
        .then(response => {
            console.log('success user classes by level', response.data);

            setTimeout(() => {
                that.setState({
                    loading: false,
                    displayFormPayment: 'none',
                    displaySuccessPayment: 'block'
                });
            }, 2000);

        })
        .catch(function (err) {
            that.setState({
                loading: false,
                displayFormPayment: 'none',
                displaySuccessPayment: 'block'
            });
            console.log('error payment', err)
        });
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
                    onPaymentStart={this.onPaymentStart}
                    onPaymentSuccess={(data) => this.onPaymentSuccess(data)}
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