import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Dropdown, Container, NavDropdown } from "react-bootstrap";

export const Navbar_2 = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse className="justify-content-around" id="basic-navbar-nav">
						<Nav>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/characters">Characters</Nav.Link>
							<Nav.Link href="/planets">Planets</Nav.Link>
							<Nav.Link href={`/vehicles`}>Vehicles</Nav.Link>
						</Nav>
						<Dropdown>
							<Dropdown.Toggle variant="dark" id="dropdown-basic">
								Dropdown Button
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};
