import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.scss";

const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h2>Planets</h2>
			<div className="card_character">
				{store.planetas.map((el, index) => {
					return (
						<div className="card_character_item" key={index}>
							<img src={el.img} />
							<h5>{el.name}</h5>
							<div className="card_icons">
								<Link className="card_botton" to={`/detallePlanets/${el.id}`}>
									Ver Detalle
								</Link>
								<span
									onClick={() => {
										actions.agregarFavoritosPlanetas(el.id);
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

export default Planets;
