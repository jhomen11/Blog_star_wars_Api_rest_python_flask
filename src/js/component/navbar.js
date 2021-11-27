import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./favorites";

export const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<img className="logo_imagen" src={require(`../../img/logo3.png`)} />
			</div>

			<div className="menu">
				<Link className="items" to={`/`}>
					Home
				</Link>
				<Link className="items" to={`/characters`}>
					Characters
				</Link>
				<Link className="items" to={`/planets`}>
					Planets
				</Link>
				<Link className="items" to={`/vehicles`}>
					Vehicles
				</Link>
			</div>
			<Favorites />
		</nav>
	);
};
