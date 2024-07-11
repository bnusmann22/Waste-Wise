import styled from "styled-components";
import Hamburger from "./ui/Hamburger";
import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import Notification from "./ui/Notification";
import { Link } from "react-router-dom";
import Search from "./ui/Search";

const Nav = styled.nav`
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: auto;

	background-color: #0b1215;
`;
const NavContents = styled.section`
	grid-column: 2;
	grid-row: 1;
	display: flex;
	align-items: center;
	gap: 1em;
	padding: 1.5em 0;
	position: relative;

	@media (min-width: 992px) {
		justify-content: space-between;
	}
`;

const MenuList = styled.ul`
	position: absolute;
	top: 6em;
	background-color: #0b1215;
	display: none;
	padding: 1em;
	&.isVisible {
		display: block;
	}
	a {
		color: #fff;
	}
	li + li {
		margin-top: 1em;
	}
	@media (min-width: 992px) {
		position: static;
		display: flex;
		gap: 1em;
		background-color: transparent;
		padding: 0em;
		li + li {
			margin-top: 0;
		}
	}
`;
const Section = styled.section`
	display: flex;
	align-items: center;
	gap: 1em;
	margin-left: auto;

	@media (min-width: 992px) {
		margin-left: 0;
	}
`;

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggleMenu() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		function handleResize() {
			setIsOpen(false);
		}

		window.addEventListener("resize", handleResize);
	}, []);
	return (
		<Nav>
			<NavContents>
				<Hamburger isOpen={isOpen} onHandleClick={handleToggleMenu} />
				<Logo />

				<MenuList className={isOpen ? "isVisible" : ""}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/services">Services</Link>
					</li>
					<li>
						<Link to="/about-us">About Us</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/contact-us">Contact Us</Link>
					</li>
				</MenuList>

				<Section>
					<Notification />
					<Search />
				</Section>
			</NavContents>
		</Nav>
	);
}

export default Navbar;
