import React from 'react'
import FormSendPincode from '../../components/Forms/Login/SendPincode'
import FormValidatePincode from '../../components/Forms/Login/ValidatePincode'
import Loading from '../../components/Loading'

import firebase from 'firebase/app'
import 'firebase/auth'
import './styles.css'

const firebaseConfig = {
    apiKey: "AIzaSyAkx7qZGIo8PWyGVIAM7aLfdhOimxDeZcs",
    authDomain: "stamina-frontend.firebaseapp.com",
    databaseURL: "https://stamina-frontend.firebaseio.com",
    projectId: "stamina-frontend",
    storageBucket: "stamina-frontend.appspot.com",
    messagingSenderId: "191142280861",
    appId: "1:191142280861:web:279205d029b311f008de74",
    measurementId: "G-4F7GGD9B4S"
};

firebase.initializeApp(firebaseConfig);

export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            message: '',
            codeInput: '',
            phoneNumber: '',
            confirmResult: null,
            loading: false
        };
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                window.location = '/dashboard';
            } else {
                window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", { size: "invisible" });
                this.setState({
                    user: null,
                    message: '',
                    codeInput: '',
                    phoneNumber: '',
                    confirmResult: null,
                    loading: false
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }

    signIn = event => {
        if(this.state.phoneNumber === ''){
            this.setState({ loading: false, message: 'Ops, preencha o campo com seu número!'});
        }else{
            const { phoneNumber } = this.state;
            this.setState({ loading: true, message: '' });
            const appVerifier = window.recaptchaVerifier;
    
            firebase.auth().signInWithPhoneNumber('+55' + phoneNumber, appVerifier)
                .then(confirmResult => this.setState({ confirmResult, loading: false }))
                .catch(error => this.setState({ loading: false, message: 'Ops, ocorreu um erro, tente novamente! :(' }));
        }
        event.preventDefault();
    };

    confirmCode = event => {
        if(this.state.codeInput === ''){
            this.setState({ loading: false, message: 'Ops, preencha o campo com seu código!'});
        }else{
            const { codeInput, confirmResult } = this.state;
            this.setState({ loading: true });
    
            if (confirmResult && codeInput.length) {
                confirmResult.confirm(codeInput)
                    .then((user) => { console.log(user); })
                    .catch(error => this.setState({ loading: false, message: 'Ops, ocorreu um erro, tente novamente! :(' }));
            }
        }
        event.preventDefault();
    };

    signOut = () => {
        firebase.auth().signOut();
    }

    handleChangeSendPincode = event => {
        this.setState({ phoneNumber: event.target.value });
    }

    handleChangeValidatePincode = event => {
        this.setState({ codeInput: event.target.value });
    }

    renderMessage() {
        const { message } = this.state;

        if (!message.length) return null;

        return (
            <div className="modal-body">
                <p style={{ fontSize: '16px', padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</p>
            </div>
        );
    }

    render() {
        const { user, phoneNumber, codeInput, confirmResult, loading } = this.state;

        return (
            <>
                <Loading status={loading} />
                <section className="content-signin">
                    <div className="form-signin">
                        <div className="modal-body">
                            <div className="site-logo" style={{ color: '#000' }}>Stamina<span style={{ color: '#f23a2e' }}>.</span></div>
                            {!user &&
                                !confirmResult &&
                                <FormSendPincode
                                    phoneNumber={phoneNumber}
                                    handleChange={this.handleChangeSendPincode}
                                    signIn={this.signIn}
                                />}

                            {!user &&
                                confirmResult &&
                                <FormValidatePincode
                                    codeInput={codeInput}
                                    handleChange={this.handleChangeValidatePincode}
                                    confirmCode={this.confirmCode}
                                />}
                            {this.renderMessage()}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}