import React from "react";

function Header({settings}) {
    
    return (
        <header>
            <div className="header-category-container">
                <h2>Category</h2>
                <h3>{settings.categoryName}</h3>
            </div>
            <div className="header-difficulty-container">
                <h2>Difficulty</h2>
                <h3>{settings.difficultyName}</h3>
            </div>
        </header>
    )
}

export default Header;