import React, { useState } from "react";

const Filter = () => {
    const [filters, setFilters] = useState({
        brand: [],
        category: [],
        gender: [],
        condition: "Novo",
    });
    const brands = ["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"];
    const categories = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
    const genders = ["Masculino", "Feminino", "Unisex"];
    const conditions = ["Novo", "Usado"];
    const handleCheckboxChange = (section, value) => {
        setFilters((prev) => {
            const updatedSection = prev[section].includes(value)
                ? prev[section].filter((item) => item !== value)
                : [...prev[section], value];
            return { ...prev, [section]: updatedSection };
        });
    };

    const handleRadioChange = (value) => {
        setFilters((prev) => ({ ...prev, condition: value }));
    };

    return (
        <>
            <div className="filter-container">
                <h3 className="filter-title">Filtrar por</h3>
                <div className="filter-section">
                    <h4 className="filter-subtitle">Marca</h4>
                    {brands.map((brand) => (
                        <label key={brand} className="filter-label">
                            <input
                                type="checkbox"
                                className="filter-checkbox"
                                checked={filters.brand.includes(brand)}
                                onChange={() => handleCheckboxChange("brand", brand)}
                            />
                            {brand}
                        </label>
                    ))}
                </div>
                <div className="filter-section">
                    <h4 className="filter-subtitle">Categoria</h4>
                    {categories.map((category) => (
                        <label key={category} className="filter-label">
                            <input
                                type="checkbox"
                                className="filter-checkbox"
                                checked={filters.category.includes(category)}
                                onChange={() => handleCheckboxChange("category", category)}
                            />
                            {category}
                        </label>
                    ))}
                </div>

                <div className="filter-section">
                    <h4 className="filter-subtitle">Gênero</h4>
                    {genders.map((gender) => (
                        <label key={gender} className="filter-label">
                            <input
                                type="checkbox"
                                className="filter-checkbox"
                                checked={filters.gender.includes(gender)}
                                onChange={() => handleCheckboxChange("gender", gender)}
                            />
                            {gender}
                        </label>
                    ))}
                </div>

                <div className="filter-section">
                    <h4 className="filter-subtitle">Estado</h4>
                    {conditions.map((condition) => (
                        <label key={condition} className="filter-label">
                            <input
                                type="radio"
                                className="filter-radio"
                                checked={filters.condition === condition}
                                onChange={() => handleRadioChange(condition)}
                            />
                            {condition}
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Filter;