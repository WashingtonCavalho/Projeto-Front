

const Profile = () => {
    return (
        <div className="profile-container-unique123">
            <aside className="sidebar-unique123">
                <ul className="menu-list-unique123">
                    <li className="menu-item-unique123">Meu Perfil</li>
                    <li className="menu-item-unique123">Meus Pedidos</li>
                    <li className="menu-item-unique123 active-unique123">Minhas Informações</li>
                    <li className="menu-item-unique123">Métodos de Pagamento</li>
                </ul>
            </aside>
            <section className="info-section-unique123">
                <header className="info-header-unique123">
                    <h2 className="info-title-unique123">Minhas Informações</h2>
                    <a href="#" className="edit-link-unique123">Editar</a>
                </header>
                <div className="info-block-unique123">
                    <h3 className="info-subtitle-unique123">Informações Pessoais</h3>
                    <p className="info-text-unique123">
                        <strong>Nome:</strong> Francisco Antonio Pereira
                    </p>
                    <p className="info-text-unique123">
                        <strong>CPF:</strong> 123485913-35
                    </p>
                    <p className="info-text-unique123">
                        <strong>Email:</strong> francisco@gmail.com
                    </p>
                    <p className="info-text-unique123">
                        <strong>Celular:</strong> (85) 5555-5555
                    </p>
                </div>
                <div className="info-block-unique123">
                    <h3 className="info-subtitle-unique123">Informações de Entrega</h3>
                    <p className="info-text-unique123">
                        <strong>Endereço:</strong> Rua João Pessoa, 333
                    </p>
                    <p className="info-text-unique123">
                        <strong>Bairro:</strong> Centro
                    </p>
                    <p className="info-text-unique123">
                        <strong>Cidade:</strong> Fortaleza, Ceará
                    </p>
                    <p className="info-text-unique123">
                        <strong>CEP:</strong> 433-8800
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Profile;
