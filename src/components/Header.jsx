import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cartItems = [
        { id: 1, name: "Tênis Nike Revolution 6 Next Nature Masculino", price: 219.0, image: "src/img/carrinho.png" },
        { id: 2, name: "Tênis Nike Revolution 6 Next Nature Masculino", price: 219.0, image: "src/img/carrinho.png" },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            <header>
                <section id="cabecalho">
                    <div className="logo">
                        <img src="data:image/png;base64,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" alt="" />
                        <h1>Digital Store</h1>
                    </div>
                    <div className="pesquisa">
                        <input type="search" placeholder="Pesquisar produtos..." />
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <div className="registro">
                        <Link className="cadastro" to={"/cadastre-se"}>Cadastre-se</Link>
                        <Link to={"/entrar"}>
                            <img src="src/img/primary-button.png" alt="" />
                        </Link>
                        <button
                            className="cart-button"
                            onClick={() => setIsModalOpen(!isModalOpen)}
                        >
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cart-count">{cartItems.length}</span>
                        </button>
                    </div>
                </section>
                <ul className="pagina">
                    <li><Link to={"/"} className="cuida">Home</Link></li>
                    <li><Link to={"/produtos"}>Produtos</Link></li>
                    <li><Link to={"/categorias"}>Categorias</Link></li>
                    <li><Link to={"/meuspedidos"}>Meus Pedidos</Link></li>
                </ul>
            </header>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-cart" onClick={(e) => e.stopPropagation()}>
                        <h2>Meu Carrinho</h2>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />
                                    <div className="cart-item-info">
                                        <p>{item.name}</p>
                                        <strong className="valortotal">R$ {item.price.toFixed(2)}</strong>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-total">
                            <strong>Valor total:</strong> <span>R$ {total.toFixed(2)}</span>
                        </div>
                        <div className="cart-actions">
                            <button className="btn-empty">Esvaziar</button>
                            <Link to={"/produtos/carrinho"}><button className="btn-view-cart">Ver Carrinho</button></Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
