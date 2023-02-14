import React from "react";

function Category({ settings, changeCategory }) {
	const [category, setCategory] = React.useState([]);

	React.useEffect(() => {
		fetch("https://opentdb.com/api_category.php")
			.then((response) => response.json())
			.then((data) => setCategory(data.trivia_categories));
	}, []);

	function CategoryElements() {
		return category.map((item, key) => {
			return (
				<option
                    key={key}
                    id={item.name}
                    value={`&category=${item.id}`}
				>
					{item.name}
				</option>
			);
		});
	}

	return (
		<div className="category--container">
			<label htmlFor="category-dropdown" className="category-label">
				Pick the Category
			</label>
			<select
				id="category-dropdown"
				name="category"
                className="category-select"
                onChange={(event) => changeCategory(event)}
			>
                <option
                    id="Any"
                    value=""
                >
					Any Category
				</option>
				{CategoryElements()}
			</select>
		</div>
	);
}

export default Category;
