import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/detalle.scss";

const DetallePlanets = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		actions.verDetallePlanets(id);
	}, []);

	return (
		<div className="container_detalle">
			<div className="card_detalle">
				<div className="card_item">
					<img src={store.detallePlaneta.img} />
					<h4>Name: {store.detallePlaneta.name}</h4>
					<p> Climate: {store.detallePlaneta.climate}</p>
					<p>Terrain: {store.detallePlaneta.terrain}</p>

					<Link className="card_botton" to={"/planets"}>
						Volver
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DetallePlanets;
