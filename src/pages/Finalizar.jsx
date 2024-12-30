import Finalizador1 from "../components/Finalizador1";
import Finalizador2 from "../components/Finalizador2";
import Finalizador3 from "../components/Finalizador3";

const Finalizar = () => {
    return (
        <>
            <section>
                <div className="finalizadorcomponet">
                    <Finalizador1 />
                </div>
                <div className="finalizadorcomponet">
                    <Finalizador2 />
                </div>
                <div>
                    <Finalizador3/>
                </div>
            </section>

        </>
    );
}

export default Finalizar;