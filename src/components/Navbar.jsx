import { useEffect, useState } from "react";
import styled from "styled-components";
import Hamburger from "./ui/Hamburger";
import Logo from "./ui/Logo";
import Notification from "./ui/Notification";
import Search from "./ui/Search";
import MenuList from "./ui/MenuList";

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
		padding: 1em 0;

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
        
				<MenuList isOpen={isOpen} />

				<Section>
					<Notification />
					<Search />
				</Section>
			</NavContents>
		</Nav>
	);
}

export default Navbar;
