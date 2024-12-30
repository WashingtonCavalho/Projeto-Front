function FazerLogin() {
    return (
        <>
            <section className="corpologin">
                <div className="login-container">
                    <div className="login-form">
                        <h1>Acesse sua conta</h1>
                        <p>
                            Novo cliente? Então registre-se <a href="/cadastrese">aqui</a>.
                        </p>
                        <form>
                            <label htmlFor="login">Login *</label>
                            <input type="text" id="login" placeholder="Insira seu login ou email" />

                            <label htmlFor="password">Senha *</label>
                            <input type="password" id="password" placeholder="Insira sua senha" />

                            <a href="#" className="forgot-password">Esqueci minha senha</a>

                            <button type="submit" className="login-button">Acessar Conta</button>

                            <p>Ou faça login com</p>
                            <div className="social-login">
                                <button className="social-button google">G</button>
                                <button className="social-button facebook">F</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="imglogin">
                    <img src="https://s3-alpha-sig.figma.com/img/95ea/b6de/38b674033b641e23cb9d658703e259af?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nBZWsPp2-GYpvxkouSTbVO5EugvU1VHVFEnLA0YHqd6g-Re~WUtCwbgjssMFjXjAwHYOX1F~4-eSCK-bzHmwRWMqX3Bi6K~cx~np3MWQBqm0gHeJMWI8pF0ObH-mH6COJAVp93VtrFKjDvBrVhPioVI-rbHBystOUkKYNQUtCokwTZVWB8W-yelS6~gIgyHY~-~AeDZVVmpwLlpML5qGZmtfi0AiP~8bfS~t7VjCgk8uq5Wgpw4xGHomYhjzIGhAAeFAu7gbZ6jXQNN4iZdXtH8nBkwkn0qSfrri6gnJ0FYIoESMgo5KHyVDh6Jh6ovIqewLm~Q7wKLcmvlDkCD1FA__" alt="" />
                </div>
            </section>
        </>
    );
}

export default FazerLogin;