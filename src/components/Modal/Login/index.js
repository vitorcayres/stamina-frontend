import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

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

export default class ModalLogin extends React.Component {

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
                this.setState({ user: user.toJSON() });
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
        this.setState({ message: 'Sending code ...' });
        const appVerifier = window.recaptchaVerifier;

        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
            .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
    };

    confirmCode = () => {
        const { codeInput, confirmResult } = this.state;

        if (confirmResult && codeInput.length) {
            confirmResult.confirm(codeInput)
                .then((user) => {
                    console.log(user)
                    this.setState({ message: 'Code Confirmed!' });
                })
                .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
        }
    };

    signOut = () => {
        firebase.auth().signOut();
    }

    renderPhoneNumberInput() {
        const { phoneNumber } = this.state;

        return (
            <div className="modal-body">
                <h5 className="text-center"><strong>Entrar no STAMINA</strong></h5>
                <p style={{ fontSize: '14px' }} className="text-center">Informe seu número de telefone</p>

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
                        <div className="col-md-12">
                            <button type="button" id="recaptcha-container" onClick={this.signIn} className="btn btn-primary py-3 px-5 btn-block">ENTRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    renderMessage() {
        const { message } = this.state;

        if (!message.length) return null;

        return (
            <p style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</p>
        );
    }

    renderVerificationCodeInput() {
        const { codeInput } = this.state;

        return (
            <div className="modal-body">
                <h5 className="text-center"><strong>Insira seu código</strong></h5>
                <p style={{ fontSize: '14px' }} className="text-center">Informe o codigo enviado para seu telefone</p>
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
                        <div className="col-md-12">
                            <button type="button" onClick={this.confirmCode} className="btn btn-primary py-3 px-5 btn-block">CONTINUAR</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }


    render() {
        const { user, confirmResult } = this.state;
        

        return (
            <>

                <button type="button" className="btn btn-outline-primary mt-2" data-toggle="modal" data-target="#modalExemplo">
                    MINHA CONTA
                </button>
                <div className="modal fade" id="modalExemplo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title">Login</h6>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            {!user && !confirmResult && this.renderPhoneNumberInput()}

                            {!user && confirmResult && this.renderVerificationCodeInput()}

                            {this.renderMessage()}

                            {user && (
                                <button type="button" id="recaptcha-container" onClick={this.signOut} className="btn btn-outline-primary mt-2" data-toggle="modal" data-target="#modalExemplo">
                                    SAIR
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </>
        );
    }
}