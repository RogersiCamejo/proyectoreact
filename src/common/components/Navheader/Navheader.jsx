import React from "react";
import { useAuth } from "../../../auth/context/AuthProvider";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavHeader = () => {
	const { logout } = useAuth();
	return (
		<>
			<Navbar
				sticky="top"
				bg="navbar"
				collapseOnSelect
				key="lg"
				expand="lg"
				variant="dark"
			>
				<Container
					fluid
					style={{
						justifyContent: "start",
					}}
				>
					<Navbar.Toggle
						aria-controls={`offcanvasNavbar-expand-lg`}
						className="text-light border-0 fs-5"
					/>
					<Navbar.Brand>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
							height="30"
							className="d-inline-block"
							alt="Clon Netflix"
						/>
					</Navbar.Brand>

					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-lg`}
						aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
						placement="start"
						variant="dark"
						className="bg-dark w-75"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title
								id={`offcanvasNavbarLabel-expand-lg`}
							>
								Netflix
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-beetwen flex-grow-1 pe-3">
								<Nav.Link href="#home" className="text-light">
									Inicio
								</Nav.Link>
								<Nav.Link href="/series" className="text-light">
									Series
								</Nav.Link>
								<Nav.Link href="/movies" className="text-light">
									Películas
								</Nav.Link>
								<Nav.Link href="#" className="text-light">
									Novedades Populres
								</Nav.Link>
								<Nav.Link href="#" className="text-light">
									Mi lista
								</Nav.Link>
								<Nav.Link href="#" className="text-light">
									Explora por idiomas
								</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link onClick={logout}>Logout</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default NavHeader;
