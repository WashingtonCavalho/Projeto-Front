import { Link } from "react-router-dom";

const ProdutoVenda = () => {
    const products = [
        {
            id: 1,
            name: "K-Swiss V8 - Masculino",
            originalPrice: 200,
            discountPrice: 100,
            discount: 30,
            imageUrl: "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EfoUhDnbwL2dGBWKKZnwMCAD4JqYrscwSPixyYkeXK7UZZvOnWWCU5WJMgeSk4G2Fq80xv4r-O1L3ndVHtak7MFQis--kF3Pi5ba-4AnncEd661l9hNZf75QjSBliAiAMEvC2aIBY1uhiIqerp8pF9C9arB2TV46o22QmWifWcV6wqe2eibi57LaxKD730BCV3A4dqFDgisPt-vzJvbE4rFFSxAPMCyzYlYhmDsbr2E5Sb4DnN-4s0lKP9~65IG3mTjZMU~dSJ1RcmKPGPQpQhYMrWncmGD6nfNWQbV~Ye4Gk6Nsa8BVmFvNLg0ELepHlrbihfiINdWx23lM2BC2Zg__ ",
        },
        {
            id: 2,
            name: "K-Swiss V8 - Masculino",
            originalPrice: 200,
            discountPrice: 100,
            discount: 30,
            imageUrl: "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EfoUhDnbwL2dGBWKKZnwMCAD4JqYrscwSPixyYkeXK7UZZvOnWWCU5WJMgeSk4G2Fq80xv4r-O1L3ndVHtak7MFQis--kF3Pi5ba-4AnncEd661l9hNZf75QjSBliAiAMEvC2aIBY1uhiIqerp8pF9C9arB2TV46o22QmWifWcV6wqe2eibi57LaxKD730BCV3A4dqFDgisPt-vzJvbE4rFFSxAPMCyzYlYhmDsbr2E5Sb4DnN-4s0lKP9~65IG3mTjZMU~dSJ1RcmKPGPQpQhYMrWncmGD6nfNWQbV~Ye4Gk6Nsa8BVmFvNLg0ELepHlrbihfiINdWx23lM2BC2Zg__ ",
        },
        {
            id: 3,
            name: "K-Swiss V8 - Masculino",
            originalPrice: 200,
            discountPrice: 100,
            discount: null,
            imageUrl: "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EfoUhDnbwL2dGBWKKZnwMCAD4JqYrscwSPixyYkeXK7UZZvOnWWCU5WJMgeSk4G2Fq80xv4r-O1L3ndVHtak7MFQis--kF3Pi5ba-4AnncEd661l9hNZf75QjSBliAiAMEvC2aIBY1uhiIqerp8pF9C9arB2TV46o22QmWifWcV6wqe2eibi57LaxKD730BCV3A4dqFDgisPt-vzJvbE4rFFSxAPMCyzYlYhmDsbr2E5Sb4DnN-4s0lKP9~65IG3mTjZMU~dSJ1RcmKPGPQpQhYMrWncmGD6nfNWQbV~Ye4Gk6Nsa8BVmFvNLg0ELepHlrbihfiINdWx23lM2BC2Zg__ ",
        },
        {
            id: 4,
            name: "K-Swiss V8 - Masculino",
            originalPrice: 200,
            discountPrice: 100,
            discount: null,
            imageUrl: "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EfoUhDnbwL2dGBWKKZnwMCAD4JqYrscwSPixyYkeXK7UZZvOnWWCU5WJMgeSk4G2Fq80xv4r-O1L3ndVHtak7MFQis--kF3Pi5ba-4AnncEd661l9hNZf75QjSBliAiAMEvC2aIBY1uhiIqerp8pF9C9arB2TV46o22QmWifWcV6wqe2eibi57LaxKD730BCV3A4dqFDgisPt-vzJvbE4rFFSxAPMCyzYlYhmDsbr2E5Sb4DnN-4s0lKP9~65IG3mTjZMU~dSJ1RcmKPGPQpQhYMrWncmGD6nfNWQbV~Ye4Gk6Nsa8BVmFvNLg0ELepHlrbihfiINdWx23lM2BC2Zg__ ",
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
                                className="product-image-modification"
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

export default ProdutoVenda;