import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/detalle.scss";

const Detalle = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		actions.verDetalle(id);
	}, []);

	return (
		<div className="container_detalle">
			<div className="card_detalle">
				<div className="card_item">
					<img src={store.detallePersonaje.img} />
					<h4>Name: {store.detallePersonaje.name}</h4>
					<p> Height: {store.detallePersonaje.height}</p>
					<p>Eye Color: {store.detallePersonaje.eye_color}</p>
					<Link className="card_botton" to={"/characters"}>
						Volver
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Detalle;
