const Preencimento2 = () => {
    return (
        <div className="delivery-container-xyz789">
            <p className="delivery-subtitle-xyz789">Informações de Entrega</p>
            <hr className="delivery-divider-xyz789" />
            <form>
                <div className="delivery-group-xyz789">
                    <label htmlFor="endereco" className="delivery-label-xyz789">
                        Endereço *
                    </label>
                    <input
                        type="text"
                        id="endereco"
                        placeholder="Insira seu endereço"
                        className="delivery-input-xyz789"
                    />
                </div>
                <div className="delivery-group-xyz789">
                    <label htmlFor="bairro" className="delivery-label-xyz789">
                        Bairro *
                    </label>
                    <input
                        type="text"
                        id="bairro"
                        placeholder="Insira seu bairro"
                        className="delivery-input-xyz789"
                    />
                </div>
                <div className="delivery-group-xyz789">
                    <label htmlFor="cidade" className="delivery-label-xyz789">
                        Cidade *
                    </label>
                    <input
                        type="text"
                        id="cidade"
                        placeholder="Insira sua cidade"
                        className="delivery-input-xyz789"
                    />
                </div>
                <div className="delivery-group-xyz789">
                    <label htmlFor="cep" className="delivery-label-xyz789">
                        CEP *
                    </label>
                    <input
                        type="text"
                        id="cep"
                        placeholder="Insira seu CEP"
                        className="delivery-input-xyz789"
                    />
                </div>
                <div className="delivery-group-xyz789">
                    <label htmlFor="complemento" className="delivery-label-xyz789">
                        Complemento
                    </label>
                    <input
                        type="text"
                        id="complemento"
                        placeholder="Insira um complemento"
                        className="delivery-input-xyz789"
                    />
                </div>
            </form>
            <div className="termoaceito">
                <input type="checkbox" name="" className="termocheck" />
                <p>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
            </div>
            <div className="butomcreatercont">
                <button className="creatercont">Criar conta</button>
            </div>
        </div>
    );
};

export default Preencimento2;
