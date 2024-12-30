import { Link } from "react-router-dom";

const Finalizador1 = () => {
    return (
        <div className="checkout-container-unique">
            <div className="personal-info-container-unique personal-info-box-unique">
                <h2 className="personal-info-title-unique">Finalizar Compra</h2>
                <form className="personal-info-form-unique">
                    <div className="form-group-unique">
                        <label>Nome Completo *</label>
                        <input type="text" placeholder="Insira seu nome" className="input-field-unique" />
                    </div>
                    <div className="form-group-unique">
                        <label>CPF *</label>
                        <input type="text" placeholder="Insira seu CPF" className="input-field-unique" />
                    </div>
                    <div className="form-group-unique">
                        <label>E-mail *</label>
                        <input type="email" placeholder="Insira seu email" className="input-field-unique" />
                    </div>
                    <div className="form-group-unique">
                        <label>Celular *</label>
                        <input type="text" placeholder="Insira seu celular" className="input-field-unique" />
                    </div>
                </form>
            </div>

            <div className="summary-container-unique summary-box-unique">
                <h2 className="summary-title-unique">RESUMO</h2>
                <div className="summary-item-unique">
                    <span className="product-name-unique">Tênis Nike Revolution 6 Next Nature Masculino</span>
                    <span className="product-price-unique">R$ 219,00</span>
                </div>
                <div className="summary-details-unique">
                    <p>Subtotal: <span>R$ 219,00</span></p>
                    <p>Frete: <span>R$ 0,00</span></p>
                    <p>Desconto: <span>R$ 30,00</span></p>
                </div>
                <div className="summary-total-unique">
                    <p>Total: <span>R$ 219,00</span></p>
                    <p className="installments-unique">ou 10x de R$ 21,00 sem juros</p>
                </div>
                <Link to={"/comprarealizada"}><button className="payment-button-unique">Realizar Pagamento</button></Link>
            </div>
        </div>
    );
};

export default Finalizador1;