import { Link } from "react-router-dom";

const CompraSucesso = () => {
  return (
    <div className="success-container-unique">
      <div className="contineiner-title-section">
        <h2 className="emoji-title">🎉</h2>
        <h2 className="success-title-unique">Compra Realizada com sucesso!</h2>
      </div>
      <div className="info-section-unique">
        <h3 className="info-title-unique">Informações Pessoais</h3>
        <p>Nome: Francisco Antonio Pereira</p>
        <p>CPF: 123.456.913-35</p>
        <p>Email: francisco@gmail.com</p>
        <p>Celular: (85) 5555-5555</p>
      </div>

      <div className="info-section-unique">
        <h3 className="info-title-unique">Informações de Entrega</h3>
        <p>Endereço: Rua João Pessoa, 333</p>
        <p>Bairro: Centro</p>
        <p>Cidade: Fortaleza, Ceará</p>
        <p>CEP: 43388-000</p>
      </div>

      <div className="info-section-unique">
        <h3 className="info-title-unique">Informações de Pagamento</h3>
        <p>Titular do Cartão: FRANCISCO A P</p>
        <p>Final: **********2020</p>
      </div>

      <div className="info-section-unique">
        <h3 className="info-title-unique">Resumo da compra</h3>
        <div className="product-summary-unique">
          <img src="/src/img/sapato.png" alt="" />
          <span className="product-name-unique">Tênis Nike Revolution 6 Next Nature Masculino</span>
        </div>
      </div>

      <div className="total-section-unique">
        <h3 className="total-title-unique">Total</h3>
        <p className="total-price-unique">R$ 219,00</p>
        <p className="installment-price-unique">ou 10x de R$ 21,00 sem juros</p>
      </div>

      <button className="print-button-unique">Imprimir Recibo</button>
      <div className="personalizacao-button-home-enviar">
        <button className="button-enviar-home"><Link to={"/"}>Voltar para a Home</Link></button>
      </div>
      
    </div>
  );
};

export default CompraSucesso;
