import React from "react";
import "../css/search.css";

function Search() {
	return (
		<form id="formSearchStudent" className="form-search">
			<input type="text" name="searchInput" id="searchInput" />
			<button className="search-button"> Pesquisar </button>
		</form>
	);
}

export default Search;
