import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.scss";

const Vehicles = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h2>Vehicles</h2>
			<div className="card_character">
				{store.starships.map((el, index) => {
					return (
						<div className="card_character_item" key={index}>
							<img src={require(`../../img/2-vehicle.jpg`)} />
							<h5>{el.name}</h5>
							<div className="card_icons">
								<Link className="card_botton" to={`/detalleVehicles/${el.uid}`}>
									Ver Detalle
								</Link>
								<span
									onClick={() => {
										actions.agregarFavoritosVehiculos(index);
									}}>
									<i className="far fa-heart" />
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Vehicles;
