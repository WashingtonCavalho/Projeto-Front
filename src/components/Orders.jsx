import { Link } from "react-router-dom";


const Orders = () => {
    const orders = [
        { id: "2234981932", status: "Produto em trânsito", statusClass: "order-status-in-transit-98x8" },
        { id: "4495810492", status: "Finalizado", statusClass: "order-status-finished-98x8" },
        { id: "4495810492", status: "Cancelado", statusClass: "order-status-canceled-98x8" },
        { id: "4495810492", status: "Finalizado", statusClass: "order-status-finished-98x8" },
        { id: "4495810492", status: "Finalizado", statusClass: "order-status-finished-98x8" },
    ];

    return (
        <div className="orders-container-98x8">
            <aside className="sidebar-98x8">
                <nav>
                    <ul>
                        <li className="sidebar-item-active-98x8">Meus Pedidos</li>
                        <Link to={"/informacao"}><li className="sidebar-item-98x8">Minhas Informações</li></Link>
                        <li className="sidebar-item-98x8">Métodos de Pagamento</li>
                    </ul>
                </nav>
            </aside>
            <main className="orders-main-98x8">
                <h2 className="orders-title-98x8">Meus Pedidos</h2>
                <div className="orders-list-98x8">
                    {orders.map((order, index) => (
                        <div className="order-item-98x8" key={index}>
                            <img
                                src="/src/img/sapato.png"
                                alt={`Pedido ${order.id}`}
                                className="order-image-98x8"
                            />
                            <div className="order-details-98x8">
                                <p>Pedido nº {order.id}</p>
                                <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                            </div>
                            <span className={`order-status-98x8 ${order.statusClass}`}>
                                {order.status}
                            </span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Orders;
