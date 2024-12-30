import { Link } from "react-router-dom";

const Verintes = () => {
    const products = [
        {
            id: 1,
            name: "K-Swiss V8 - Masculino",
            originalPrice: 200,
            discountPrice: 100,
            discount: 30,
            imageUrl: "/src/img/mercadoria.png",
        },
        {
            id: 2,
            name: "K-Swiss V8 - Masculino",
            originalPrice: 200,
            discountPrice: 100,
            discount: 30,
            imageUrl: "/src/img/mercadoria.png",
        },
        {
            id: 3,
            name: "K-Swiss V8 - Masculino",
            originalPrice: 200,
            discountPrice: 100,
            discount: null,
            imageUrl: "/src/img/mercadoria.png",
        },
        {
            id: 4,
            name: "K-Swiss V8 - Masculino",
            originalPrice: 200,
            discountPrice: 100,
            discount: null,
            imageUrl: "/src/img/mercadoria.png",
        },
    ];

    return (
        <>
            <section className="promocao-section">
                <div className="altoproduts">
                    <h1>Produtos em alta</h1>
                    <Link to={"/produtos"}>Ver mais →</Link>
                </div>
                <div className="product-grid">
                    {products.map((product) => (
                        <Link key={product.id} to={`/produtos/${product.id}`} className="product-card">
                            {product.discount && (
                                <div className="discount-badge">{product.discount}% OFF</div>
                            )}
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="product-image"
                            />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-prices">
                                <span className="original-price">${product.originalPrice}</span>
                                <span className="discount-price">${product.discountPrice}</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Verintes;