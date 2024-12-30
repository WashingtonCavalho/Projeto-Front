const Destaques = () => {
    return (
        <>
        <h2 className="colecao">
            Coleções em destaque
        </h2>
            <section className="destaque">
                <div  className="caixa">
                    <div className="caixatexto">
                        <h1>30% off</h1>
                        <h2>Novo drop<br />Supreme</h2>
                        <button>Comprar</button>
                    </div>
                    <img src="src/img/blusa.png" alt="" />
                </div>
                <div className="caixa">
                <div className="caixatexto">
                    <h1>30%off</h1>
                    <h2>Coleção <br />Adidas</h2>
                    <button>Comprar</button>
                </div>
                <img src="src/img/sapatinho.png" alt="" />
                </div>
                <div className="caixa">
                    <div className="caixatexto">
                        <h1>30%off</h1>
                        <h2>Novo drop<br />Supreme</h2>
                        <button>Comprar</button>
                    </div>
                    <img src="src/img/fone.png" alt="" />
                </div>
            </section>
            <h1 className="colecaodes">
                Coleções em destaque
            </h1>
            {/*não sei onde vcs acharam esses icons*/}
            <section className="pecasdestaque">
                <div className="roupa">
                    <img src="src/img/camiseta.png" alt="" />
                    <h3>Camisetas</h3>
                </div>
                <div className="roupa">
                    <img src="src/img/calça.png" alt="" />
                    <h3>Calças</h3>
                </div>
                <div className="roupa">
                    <img src="src/img/calça.png" alt="" />
                    <h3>Bonés</h3>
                </div>
                <div className="roupa">
                    <img src="src/img/headfone.png" alt="" />
                    <h3>Headphone</h3>
                </div>
                <div className="roupa">
                    <img src="src/img/tenis.png" alt="" />
                    <h3>Tênis</h3>
                </div>
            </section>
        </>
    );
}

export default Destaques;