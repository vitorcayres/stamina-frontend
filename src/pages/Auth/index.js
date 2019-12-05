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
            this.setState({ user: user.toJSON() });
          } else {

            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", { size:"invisible" });

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
          <div style={{ padding: 25 }}>
            <p>Enter phone number:</p>
            <input
              autoFocus={true}
              style={{ height: 40, marginTop: 15, marginBottom: 15 }}
              onChange={value => this.setState({ phoneNumber: value })}
              placeholder={'Phone number ... '}
              value={phoneNumber}
            />
            <button type="button" id="recaptcha-container" onClick={this.signIn}>Sign In</button>
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
          <div style={{ marginTop: 25, padding: 25 }}>
            <p>Enter verification code below:</p>
            <input
              autoFocus
              style={{ height: 40, marginTop: 15, marginBottom: 15 }}
              onChange={value => this.setState({ codeInput: value })}
              placeholder={'Code ... '}
              value={codeInput}
            />
            <button type="button" onClick={this.confirmCode}>Confirm Code</button>
          </div>
        );
      }
    

    render() {
        const { user, confirmResult } = this.state;

        return (
            <React.Fragment>

                <div style={{ flex: 1 }}>

                    {!user && !confirmResult && this.renderPhoneNumberInput()}

                    {this.renderMessage()}

                    {!user && confirmResult && this.renderVerificationCodeInput()}

                    {user && (
                        <div
                            style={{
                                padding: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                            }}
                        >
                            <p style={{ fontSize: 25 }}>Signed In!</p>
                            <p>{JSON.stringify(user)}</p>
                            <button type="button" id="recaptcha-container" onClick={this.signOut}>Sign Out</button>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}