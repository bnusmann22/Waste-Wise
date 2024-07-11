import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Hamburger from "./ui/Hamburger";
import { useState } from "react";
import Logo from "./ui/Logo";
import Notification from "./ui/Notification";

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
`;
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<Nav>
			<NavContents>
				<Hamburger isOpen={isOpen} onHandleClick={handleToggleMenu} />
        <Logo />
        
        <ul>

        </ul>

				<section>
					<Notification />
					<IoSearch />
				</section>
			</NavContents>
		</Nav>
	);
}

export default Navbar;
