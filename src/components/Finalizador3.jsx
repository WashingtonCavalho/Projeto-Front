import { Link } from "react-router-dom";

const Finalizador3 = () => {
    return (
        <div className="payment-container-unique">
            <h2 className="payment-title-unique">Informações de Pagamento</h2>
            <div className="payment-methods-unique">
                <label className="payment-method-label-unique">
                    <input type="radio" name="paymentMethod" className="payment-radio-unique" />
                    Cartão de Crédito
                </label>
                <label className="payment-method-label-unique">
                    <input type="radio" name="paymentMethod" className="payment-radio-unique" />
                    Boleto Bancário
                </label>
            </div>

            <div className="card-details-unique">
                <div className="form-group-unique">
                    <label className="form-label-unique">Nome do Cartão *</label>
                    <input type="text" placeholder="Insira o nome do Cartão" className="input-field-unique" />
                </div>
                <div className="form-group-unique">
                    <label className="form-label-unique">Número do Cartão *</label>
                    <input type="text" placeholder="Insira número do Cartão" className="input-field-unique" />
                </div>
                <div className="form-group-unique">
                    <label className="form-label-unique">Validade do Cartão *</label>
                    <input type="text" placeholder="Insira a validade do Cartão" className="input-field-unique" />
                </div>
                <div className="form-group-unique">
                    <label className="form-label-unique">CVV *</label>
                    <input type="text" placeholder="CVV" className="input-field-unique" />
                </div>
            </div>

            <div className="payment-summary-unique">
                <h3 className="payment-summary-title-unique">Total</h3>
                <p className="payment-summary-text-unique">
                    <strong className="payment-total-unique">R$ 219,00</strong> <br />
                    ou 10x de R$ 21,00 sem juros
                </p>
                <Link to={"/comprarealizada"}><button className="payment-button-unique">Realizar Pagamento</button></Link>
            </div>
        </div>
    );
};

export default Finalizador3;
