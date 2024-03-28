import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import DarkModeSwitcher from "./dark-mode-switcher";
import LangSwitcher from "./lang-switcher";
import { $t } from "../helpers/locale-helper";

const MainMenu = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">Redux</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link to="/" as={Link}>
							{$t('home')}
						</Nav.Link>
						<Nav.Link to="/about" as={Link}>
							{$t('about')}
						</Nav.Link>
						<Nav.Link to="/contact" as={Link}>
							{$t('contact')}
						</Nav.Link>
						
					</Nav>
					
					<div className="d-flex flex-column flex-lg-row gap-3 align-items-lg-center ">
						<LangSwitcher/>
						<DarkModeSwitcher/>	
					</div>
	
					

				</Navbar.Collapse>

				
			</Container>
		</Navbar>
	);
};

export default MainMenu;