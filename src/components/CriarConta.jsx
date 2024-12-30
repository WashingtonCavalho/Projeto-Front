const CriarConta = () => {
    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-form">
                    <h1>Crie sua conta</h1>
                    <p>
                        Já possui uma conta? Entre <a href="/logar">aqui</a>.
                    </p>
                    <form>
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Insira seu email"
                        />
                        <a href="/cadastro">
                            <button className="signup-button" type="submit">
                                Criar Conta
                            </button>
                        </a>
                    </form>

                </div>
            </div>
            <div className="imglogin">
                <img src="https://s3-alpha-sig.figma.com/img/95ea/b6de/38b674033b641e23cb9d658703e259af?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nBZWsPp2-GYpvxkouSTbVO5EugvU1VHVFEnLA0YHqd6g-Re~WUtCwbgjssMFjXjAwHYOX1F~4-eSCK-bzHmwRWMqX3Bi6K~cx~np3MWQBqm0gHeJMWI8pF0ObH-mH6COJAVp93VtrFKjDvBrVhPioVI-rbHBystOUkKYNQUtCokwTZVWB8W-yelS6~gIgyHY~-~AeDZVVmpwLlpML5qGZmtfi0AiP~8bfS~t7VjCgk8uq5Wgpw4xGHomYhjzIGhAAeFAu7gbZ6jXQNN4iZdXtH8nBkwkn0qSfrri6gnJ0FYIoESMgo5KHyVDh6Jh6ovIqewLm~Q7wKLcmvlDkCD1FA__" alt="" />
            </div>
        </div>
    );
};

export default CriarConta;

