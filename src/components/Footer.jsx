const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-section brand">
                <div className="footer-logomarca">
                    <img src="src/img/footer-logo.png" alt="" />
                    <h1>Digital Store</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="social-icons">
                    <a href="#facebook" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#instagram" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#twitter" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="footer-section">
                <h3>Informação</h3>
                <ul>
                    <li><a href="#about">Sobre Drip Store</a></li>
                    <li><a href="#security">Segurança</a></li>
                    <li><a href="#wishlist">Wishlist</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#careers">Trabalhe conosco</a></li>
                    <li><a href="#orders">Meus Pedidos</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Categorias</h3>
                <ul>
                    <li><a href="#shirts">Camisetas</a></li>
                    <li><a href="#pants">Calças</a></li>
                    <li><a href="#hats">Bonés</a></li>
                    <li><a href="#headphones">Headphones</a></li>
                    <li><a href="#shoes">Tênis</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contato</h3>
                <p>
                    Av. Santos Dumont, 1510 - 1 <br/> andar - Aldeota, Fortaleza -<br/> CE, 60150-161
                </p>
                <p>(85) 3051-3411</p>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; 2022 Digital College
        </div>
    </footer>
    );
};
    export default Footer;