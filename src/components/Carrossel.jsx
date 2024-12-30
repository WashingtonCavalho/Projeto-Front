import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carrossel = () => {
    const slides = [
    {
        titulo: "Queima de estoque Nike🔥",
        descricao: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
        imagem: "https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kEbqiwVpGpfpTB~h9B4MfzuL8JWmyfqaULL7VCNmMsONPIE8xCvymQGJi4UB4RON7JdYsr4Jw409S791kUQXTXiTAPiwztFUjCV5MmVQ~P10OVuI-a2nSFDTzOiPJcWehzKEz~uw3JSjE9WuWhriXWyAzi-OTsXoFOuua4XQEJCPHaKSio60NIWcqK0x92~GqXwcrUiTLV2ozn6QP7y0IerK2FQGjzZnPD-hnGsTapFHvZ31s1zD~xP1EQDktJQLL6bvrQ7WRPOy1edIlUWDUVl-k5G8EJgcn9g1WAZQeAavStZIp7OBf5vRKmxHvCMujcj9MkQS3uYwn-V~0sShpw__",
        botaoTexto: "Ver Ofertas",
    },{},{},{},
];

const [indiceAtual, setIndiceAtual] = useState(0);

    return (
    <div className="carrossel">
        <div className="slides">
        {slides.map((slide, index) => (
            <div key={index} className={`slide ${indiceAtual === index ? "ativo" : "inativo"}`}>
                <div className="conteudo">
                    <h3>{slide.titulo}</h3>
                    <p>{slide.descricao}</p>
                    <Link to={"/promo"}><button className="botao">{slide.botaoTexto}</button></Link>
                </div>
                <div className="imagem">
                    <img src={slide.imagem} alt={`Slide ${index + 1}`} />
                </div>
            </div>
        ))}
        </div>
        <div className="indicadores">
            {slides.map((_, index) => (
            <span key={index} className={`indicador ${indiceAtual === index ? "ativo" : ""}`} onClick={() => setIndiceAtual(index)}></span>
            ))}
        </div>
    </div>
    );
};

export default Carrossel;
