import React, { useState } from "react";

const Modal = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const options = [
        { value: "maisRelevantes", label: "Mais relevantes" },
        { value: "menorPreco", label: "Menor preço" },
        { value: "maiorPreco", label: "Maior preço" },
        { value: "maisVendidos", label: "Mais vendidos" },
    ];

    return (
        <div className="custom-select-container">
            <label htmlFor="order-select" className="custom-select-label">
                Ordenar por:
            </label>
            <select
                id="order-select"
                className="custom-select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option value="" disabled>
                    Selecione uma opção
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Modal;
