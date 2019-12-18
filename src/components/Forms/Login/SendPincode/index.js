import React from 'react'

export default (props) => {
    return (
        <React.Fragment>
            <div className="modal-body">
                <h5 className="pt-4 text-center"><strong>Login</strong></h5>
                <p style={{ fontSize: '14px' }} className="text-center">Informe seu número de telefone:</p>
                <form data-aos="fade">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                onChange={props.handleChange}
                                placeholder={'Informe seu DDD + Telefone '}
                                value={props.phoneNumber}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <button type="submit" onClick={props.signIn} id="recaptcha-container" className="btn btn-primary py-3 px-5 btn-block">
                                PRÓXIMA
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}