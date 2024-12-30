import React, { useState } from "react";

const InforProduto = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    // Imagens do produto
    const images = [
        "https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoSTC~-aqDp-6LpqaAXdTIq8nbChkj7ZgMaLgltvbKEDq6V7T1x6NXEP~Xvcah60BlUvwqyE~cchzNwv4tNTEIrlB6GzlEjLZrToFH3F6asAmOnCM5ACSdq4ql2ulcs9qJUaYbzSC2D6FF2JN-wAQPOnkYMtZXHQurqybhu58RQlu9z3H7L8iyN9GJXpMYHvPHK7Z9bz7utE6OFQspuuD3GpwgkSqtgPJD~PKqc3lOA48T4l6py~GXLNBR1UqslwNI75V655ecikSitTH9dWDj8974aajf7zRVu4-aCTNkObMBjUI3poVdMZCugnTqk7rqrwjFg00x9e5-5b2AJGtA__",
        "https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoSTC~-aqDp-6LpqaAXdTIq8nbChkj7ZgMaLgltvbKEDq6V7T1x6NXEP~Xvcah60BlUvwqyE~cchzNwv4tNTEIrlB6GzlEjLZrToFH3F6asAmOnCM5ACSdq4ql2ulcs9qJUaYbzSC2D6FF2JN-wAQPOnkYMtZXHQurqybhu58RQlu9z3H7L8iyN9GJXpMYHvPHK7Z9bz7utE6OFQspuuD3GpwgkSqtgPJD~PKqc3lOA48T4l6py~GXLNBR1UqslwNI75V655ecikSitTH9dWDj8974aajf7zRVu4-aCTNkObMBjUI3poVdMZCugnTqk7rqrwjFg00x9e5-5b2AJGtA__",
        "https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoSTC~-aqDp-6LpqaAXdTIq8nbChkj7ZgMaLgltvbKEDq6V7T1x6NXEP~Xvcah60BlUvwqyE~cchzNwv4tNTEIrlB6GzlEjLZrToFH3F6asAmOnCM5ACSdq4ql2ulcs9qJUaYbzSC2D6FF2JN-wAQPOnkYMtZXHQurqybhu58RQlu9z3H7L8iyN9GJXpMYHvPHK7Z9bz7utE6OFQspuuD3GpwgkSqtgPJD~PKqc3lOA48T4l6py~GXLNBR1UqslwNI75V655ecikSitTH9dWDj8974aajf7zRVu4-aCTNkObMBjUI3poVdMZCugnTqk7rqrwjFg00x9e5-5b2AJGtA__",
        "https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoSTC~-aqDp-6LpqaAXdTIq8nbChkj7ZgMaLgltvbKEDq6V7T1x6NXEP~Xvcah60BlUvwqyE~cchzNwv4tNTEIrlB6GzlEjLZrToFH3F6asAmOnCM5ACSdq4ql2ulcs9qJUaYbzSC2D6FF2JN-wAQPOnkYMtZXHQurqybhu58RQlu9z3H7L8iyN9GJXpMYHvPHK7Z9bz7utE6OFQspuuD3GpwgkSqtgPJD~PKqc3lOA48T4l6py~GXLNBR1UqslwNI75V655ecikSitTH9dWDj8974aajf7zRVu4-aCTNkObMBjUI3poVdMZCugnTqk7rqrwjFg00x9e5-5b2AJGtA__","https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoSTC~-aqDp-6LpqaAXdTIq8nbChkj7ZgMaLgltvbKEDq6V7T1x6NXEP~Xvcah60BlUvwqyE~cchzNwv4tNTEIrlB6GzlEjLZrToFH3F6asAmOnCM5ACSdq4ql2ulcs9qJUaYbzSC2D6FF2JN-wAQPOnkYMtZXHQurqybhu58RQlu9z3H7L8iyN9GJXpMYHvPHK7Z9bz7utE6OFQspuuD3GpwgkSqtgPJD~PKqc3lOA48T4l6py~GXLNBR1UqslwNI75V655ecikSitTH9dWDj8974aajf7zRVu4-aCTNkObMBjUI3poVdMZCugnTqk7rqrwjFg00x9e5-5b2AJGtA__"
    ];

    const backgroundColors = [
        "#E2E3FF", 
        "#FFE8BC", 
        "#FFC0BC",
        "#DEC699",
        "#E8DFCF"
    ];

    const sizes = [39, 40, 41, 42, 43];
    const colors = ["blue", "red", "purple", "gray"];

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="product-display-container">
            <div className="product-image-section">
                <div className="image-carousel">
                    <button className="carousel-button prev" onClick={handlePrevImage}>
                        &#9664;
                    </button>
                    <div
                        className="product-main-image"
                        style={{
                            backgroundColor: backgroundColors[selectedImageIndex],
                            padding: "20px",
                            borderRadius: "8px",
                        }}
                    >
                        <img
                            src={images[selectedImageIndex]}
                            alt="Produto principal"
                            className="product-main-image"
                            style={{
                                maxWidth: "100%",
                                borderRadius: "8px", 
                            }}
                        />
                    </div>
                    <button className="carousel-button next" onClick={handleNextImage}>
                        &#9654;
                    </button>
                </div>
                <div className="product-thumbnail-section">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={
                                selectedImageIndex === index
                                    ? "product-thumbnail active"
                                    : "product-thumbnail"
                            }
                            onClick={() => setSelectedImageIndex(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="product-info-section">
                <h1 className="product-title">Tênis Nike Revolution 6 Next Nature Masculino</h1>
                <p className="product-category">Casual | Nike | REF: 38467111</p>
                <div className="product-rating">
                    ⭐ 4.7 (<span>90 avaliações</span>)
                </div>
                <div className="product-price">
                    <span className="current-price">R$ 219,00</span>
                    <span className="old-price">219,00</span>
                </div>
                <h3 className="productdescriptiontitle">Descrição do produto</h3>
                <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>

                <div className="product-size-options">
                    <h3 className="size-title">Tamanho</h3>
                    <div className="size-buttons">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                className={
                                    selectedSize === size
                                        ? "size-button selected-size"
                                        : "size-button"
                                }
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="product-color-options">
                    <h3 className="color-title">Cor</h3>
                    <div className="color-buttons">
                        {colors.map((color, index) => (
                            <button
                                key={index}
                                className={
                                    selectedColor === color
                                        ? `color-button ${color} selected-color`
                                        : `color-button ${color}`
                                }
                                onClick={() => setSelectedColor(color)}
                            ></button>
                        ))}
                    </div>
                </div>

                <button className="product-buy-button">COMPRAR</button>
            </div>
        </div>
    );
};

export default InforProduto;
