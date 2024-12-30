import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useState(30);
    const [freight, setFreight] = useState(0);

    const product = {
        name: "Tênis Nike Revolution 6 Next Nature Masculino",
        price: 219.0,
        color: "Vermelho / Branco",
        size: 42,
        image: "/src/img/sapato.png", // Substitua pela URL da imagem real
    };

    const subtotal = product.price * quantity;
    const total = subtotal - discount + freight;

    const handleQuantityChange = (operation) => {
        setQuantity((prev) => (operation === "add" ? prev + 1 : Math.max(prev - 1, 1)));
    };

    return (
        <div className="sc-app-root">
            <div className="sc-app-wrapper">
                <div className="sc-app-items">
                    <h2>MEU CARRINHO</h2>
                    <div className="sc-app-item">
                        <img src={product.image} alt="Produto" className="sc-app-image" />
                        <div className="sc-app-item-details">
                            <h3>{product.name}</h3>
                            <p>
                                Cor: <span>{product.color}</span>
                            </p>
                            <p>
                                Tamanho: <span>{product.size}</span>
                            </p>
                            <button className="sc-app-remove-item">Remover item</button>
                        </div>
                        <div className="sc-app-item-quantity">
                            <button onClick={() => handleQuantityChange("subtract")}>-</button>
                            <input type="text" value={quantity} readOnly />
                            <button onClick={() => handleQuantityChange("add")}>+</button>
                        </div>
                        <div className="sc-app-item-price">
                            <p>R$ {subtotal.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="sc-app-discount-shipping">
                        <div className="sc-app-discount">
                            <input type="text" placeholder="Insira seu código" />
                            <button>OK</button>
                        </div>
                        <div className="sc-app-shipping">
                            <input type="text" placeholder="Insira seu CEP" />
                            <button>OK</button>
                        </div>
                    </div>
                </div>
                <div className="sc-app-summary">
                    <h2>RESUMO</h2>
                    <p>Subtotal: <span>R$ {subtotal.toFixed(2)}</span></p>
                    <p>Frete: <span>R$ {freight.toFixed(2)}</span></p>
                    <p>Desconto: <span>R$ {discount.toFixed(2)}</span></p>
                    <h3>Total: <span>R$ {total.toFixed(2)}</span></h3>
                    <p className="sc-app-installments">ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>
                    <Link to={"/finalizar"}><button className="sc-app-continue-button">Continuar</button></Link>
                </div>
            </div>
        </div>
    );
}

export default App;
