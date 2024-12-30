const Finalizador2 = () => {
    return (
        <div className="delivery-info-container-unique">
            <h2 className="delivery-info-title-unique">Informações de Entrega</h2>
            <form className="delivery-info-form-unique">
                <div className="form-group-unique">
                    <label>Endereço *</label>
                    <input type="text" placeholder="Insira seu endereço" className="input-field-unique" />
                </div>
                <div className="form-group-unique">
                    <label>Bairro *</label>
                    <input type="text" placeholder="Insira seu bairro" className="input-field-unique" />
                </div>
                <div className="form-group-unique">
                    <label>Cidade *</label>
                    <input type="text" placeholder="Insira sua cidade" className="input-field-unique" />
                </div>
                <div className="form-group-unique">
                    <label>CEP *</label>
                    <input type="text" placeholder="Insira seu CEP" className="input-field-unique" />
                </div>
                <div className="form-group-unique">
                    <label>Complemento</label>
                    <input type="text" placeholder="Insira complemento" className="input-field-unique" />
                </div>
            </form>
        </div>
    );
};

export default Finalizador2;