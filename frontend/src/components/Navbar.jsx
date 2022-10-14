import React from "react";
import "../css/navbar.css";

function Navbar() {
	return (
		<nav className="main-nav">
			<header>EdTech</header>
			<ul className="nav-links">
				<a className="nav-item" href="/#">
					<li> Alunos </li>
				</a>
			</ul>
		</nav>
	);
}

export default Navbar;
