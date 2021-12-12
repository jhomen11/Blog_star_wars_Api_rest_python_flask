import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Nav, Navbar, Dropdown, Container, NavDropdown } from "react-bootstrap";

const Favorites = () => {
	const { store, actions } = useContext(Context);
	const x = store.mostrarFavoritos;

	return (
		<div className="favoritos">
			<Dropdown>
				<Dropdown.Toggle variant="dark" id="dropdown-basic">
					Favorites {store.favoritos.length}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favoritos.map((el, index) => {
						return (
							<Dropdown.Item href="#/action-1" key={index}>
								{el.name}
								<span className="btn_eliminar">
									<i onClick={() => actions.eliminarFavoritos(index)} className="far fa-trash-alt " />
								</span>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
			{/* <span className="favoritos_dropdown" onClick={() => actions.setMostrarFavoritos()}>
				Favorites {store.favoritos.length}
			</span>

			<ul className={store.mostrarFavoritos ? "visible" : "oculto"}>
				{store.favoritos.map((el, index) => {
					return (
						<li key={index}>
							{el.name}
							<i onClick={() => actions.eliminarFavoritos(index)} className="far fa-trash-alt" />
						</li>
					);
				})}
			</ul> */}
		</div>
	);
};

export default Favorites;
