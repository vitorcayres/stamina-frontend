import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

export default (props) => {
    return (
        <div className="container" style={{ display: props.display }}>
            <div className="py-5 text-center">
                <div className="site-logo mb-3" style={{ color: '#000' }}>Stamina<span style={{ color: '#f23a2e' }}>.</span></div>
                <h2>Formas de Pagamento</h2>
                <p className="lead">Para finalizarmos, selecione a forma de pagamento de deseja:</p>
            </div>
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card-deck mb-3 text-center">
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Plano Premium</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">R$ 100,00 <small className="text-muted">/ ano</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>3 niveis de aula</li>
                                            <li>Suporte</li>
                                            <li>Acesso ao centro de ajuda</li>
                                        </ul>
                                        <PayPalButton
                                            amount="100.00"
                                            style={{
                                                layout: 'vertical',
                                                color: 'gold',
                                                shape: 'rect',
                                                label: 'buynow'
                                            }}
                                            onSuccess={(data) => props.handleOnSuccessPayment(data)}
                                            options={{
                                                clientId: "AWsEZXDJ9bmY1hLtL7Z4c_GtLvHV3gmRM41TdlS-u042Cfa7f0ji_Mn-OLTLB8BYS2BsA_qVt6JiVIhZ",
                                                currency: "BRL"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}