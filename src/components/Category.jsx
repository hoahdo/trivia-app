import React from "react";

function Category ({settings, changeCategory}) {
    
    const [category, setCategory] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
        .then(response => response.json())
        .then(data => setCategory(data.trivia_categories))
    }, [])
    

    
    function CategoryElements () {
        return category.map((item, key) => {
            return (
                <option
                    key={key}
                    value={`&category=${item.id}`}
                    onClick={(event) => changeCategory(event)}
                >
                    {item.name}
                </option>
            )
        })
    }
    
    return (
        <div className="category--container">
            <label htmlFor="category-dropdown" className="category-label">
                Pick the Category
            </label>
            <select 
                id="category-dropdown"
                defaultValue={settings.category}
                name="category"
                className="category-select"
            >
                <option value="" onClick={(event) => changeCategory(event)}>
                    Any Category
                </option>
                {CategoryElements()}
            </select>
        </div>
    )
}

export default Category;