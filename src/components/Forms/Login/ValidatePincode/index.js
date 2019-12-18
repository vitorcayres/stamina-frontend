import React from 'react'

export default (props) => {
    return (
        <React.Fragment>
            <div className="modal-body">
                <h5 className="pt-4 text-center"><strong>Valide seu código</strong></h5>
                <p style={{ fontSize: '14px' }} className="text-center">Informe o código enviado para seu telefone:</p>
                <form data-aos="fade">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input
                                className="form-control"
                                autoFocus={true}
                                onChange={props.handleChange}
                                placeholder={'Digite o código recebido'}
                                value={props.codeInput}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <button type="submit" onClick={props.confirmCode} className="btn btn-primary py-3 px-5 btn-block">CONTINUAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}