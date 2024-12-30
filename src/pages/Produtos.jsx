
import Filter from "../components/Filter";
import Modal from "../components/modal";
import Vendas from "../components/Vendas";

const Produtos = () => {
    return (
        <>
            <section className="resultadostitulo">
                <div className="resultadoss">
                    <h1>Resultados para "Tênis" </h1>
                    <p>- 389 produtos</p>
                </div>
                <div>
                    <Modal/>
                </div>
            </section>
            <section className="paginaproduts">
                <div>
                    <Filter />
                </div>
                <div>
                    <Vendas />
                </div>
            </section>
        </>
    );
}

export default Produtos;