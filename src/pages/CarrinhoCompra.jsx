import Carrinho from "../components/Carrinho";
import Verintes from "../components/VerIntes";

const CarrinhoCompra = () => {
    return (
        <>
            <section className="modulacao">
                <div>
                    <Carrinho />
                </div>
                <div className="modulacao2">
                    <Verintes />
                </div>
            </section>
        </>
    );
}

export default CarrinhoCompra;