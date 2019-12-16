import React from 'react'
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
            codeInput: '123456',
            phoneNumber: '+5511958781603',
            confirmResult: null,
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
                    codeInput: '123456',
                    phoneNumber: '+5511958781603',
                    confirmResult: null,
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }

    signIn = () => {
        const { phoneNumber } = this.state;
        this.setState({ message: true });
        const appVerifier = window.recaptchaVerifier;

        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(confirmResult => this.setState({ confirmResult, message: false }))
            .catch(function (error) {
                console.log(`Sign In With Phone Number Error: ${error.message}`);
                this.setState({ message: false })                
            });
    };

    confirmCode = () => {
        const { codeInput, confirmResult } = this.state;

        this.setState({ message: true });

        if (confirmResult && codeInput.length) {
            confirmResult.confirm(codeInput)
                .then((user) => {
                    //window.location = '/dashboard';
                    this.setState({ message: false });
                })
                .catch(function (error) {
                    console.log(`Code Confirm Error: ${error.message}`);
                    this.setState({ message: false })                
                });
        }
    };

    signOut = () => {
        firebase.auth().signOut();
    }

    renderPhoneNumberInput() {
        const { phoneNumber } = this.state;

        return (
            <div className="modal-body">
                <div className="site-logo" style={{ color: '#000' }}>Stamina<span style={{ color: '#f23a2e' }}>.</span></div>
                <h5 className="pt-4"><strong>Login</strong></h5>
                <p style={{ fontSize: '14px' }} className="text-center">Informe seu número de telefone:</p>
                <form method="post" data-aos="fade">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input
                                className="form-control"
                                autoFocus={true}
                                onChange={value => this.setState({ phoneNumber: value })}
                                placeholder={'Informe seu DDD + Telefone '}
                                value={phoneNumber}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 offset-md-6">
                            <div id="recaptcha-container" style={{ display: 'none' }} />
                            <button type="button" onClick={this.signIn} className="btn btn-primary py-3 px-5 btn-block">PRÓXIMA</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    renderMessage() {
        const { message } = this.state;

        if (!message) return null;

        return (
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }} />
            </div>
        );
    }

    renderVerificationCodeInput() {
        const { codeInput } = this.state;

        return (
            <div className="modal-body">
                <div className="site-logo" style={{ color: '#000' }}>Stamina<span style={{ color: '#f23a2e' }}>.</span></div>
                <h5 className="pt-4"><strong>Insira seu código</strong></h5>
                <p style={{ fontSize: '14px' }} className="text-center">Para continuarmos, insira o código enviado a você:</p>
                <form method="post" data-aos="fade">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input
                                className="form-control"
                                autoFocus={true}
                                onChange={value => this.setState({ codeInput: value })}
                                placeholder={'Digite o código recebido'}
                                value={codeInput}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 offset-md-6">
                            <div id="recaptcha-container" style={{ display: 'none' }} />
                            <button type="button" onClick={this.confirmCode} className="btn btn-primary py-3 px-5 btn-block">PRÓXIMA</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        const { user, confirmResult } = this.state;

        return (
            <section className="content-signin">
                <div className="form-signin">
                    {!user && !confirmResult && this.renderPhoneNumberInput()}
                    {!user && confirmResult && this.renderVerificationCodeInput()}
                    {user && (
                        <>
                            <p style={{ fontSize: 25 }}>Logado!</p>
                            <div id="recaptcha-container" style={{ display: 'none' }} />
                            <button type="button" className="btn btn-primary py-3 px-5 btn-block" onClick={this.signOut}>SAIR</button>
                        </>
                    )}
                    {this.renderMessage()}
                </div>
            </section>
        );
    }
}