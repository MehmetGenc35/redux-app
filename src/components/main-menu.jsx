import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import DarkModeSwitcher from "./dark-mode-switcher";

const MainMenu = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">Redux</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link to="/" as={Link}>
							Home
						</Nav.Link>
						<Nav.Link to="/about" as={Link}>
							About
						</Nav.Link>
						<Nav.Link to="/contact" as={Link}>
							Contact
						</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Action
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					
					<DarkModeSwitcher/>
					

				</Navbar.Collapse>

				
			</Container>
		</Navbar>
	);
};

export default MainMenu;