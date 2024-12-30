

const Preencimento = () => {
    return (
        <div className="unique-container-abc123">
            <h2 className="unique-title-abc123">Criar Conta</h2>
            <p className="unique-subtitle-abc123">Informações Pessoais</p>
            <hr className="unique-divider-abc123" />
            <form>
                <div className="unique-group-abc123">
                    <label htmlFor="nome" className="unique-label-abc123">
                        Nome Completo *
                    </label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Insira seu nome"
                        className="unique-input-abc123"
                    />
                </div>
                <div className="unique-group-abc123">
                    <label htmlFor="cpf" className="unique-label-abc123">
                        CPF *
                    </label>
                    <input
                        type="text"
                        id="cpf"
                        placeholder="Insira seu CPF"
                        className="unique-input-abc123"
                    />
                </div>
                <div className="unique-group-abc123">
                    <label htmlFor="email" className="unique-label-abc123">
                        E-mail *
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Insira seu email"
                        className="unique-input-abc123"
                    />
                </div>
                <div className="unique-group-abc123">
                    <label htmlFor="celular" className="unique-label-abc123">
                        Celular *
                    </label>
                    <input
                        type="tel"
                        id="celular"
                        placeholder="Insira seu celular"
                        className="unique-input-abc123"
                    />
                </div>
            </form>
        </div>
    );
};

export default Preencimento;
