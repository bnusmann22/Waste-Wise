/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMenuList = styled.ul`
width: 15em;
	position: absolute;
	top: 6em;
	background-color: #0b1215;
	display: none;
	&.isVisible {
		display: block;
	}
	a {
		color: #fff;
    padding: 1em;
    border-bottom: 1px solid transparent;

    display: block;

	}
  a.active {
    border-left: 3px solid #0f0;
  }

	@media (min-width: 992px) {
		position: static;
		display: flex;
		gap: 1em;
		background-color: transparent;
		padding: 0em;
    width: initial;

    a {
    padding: 1em 0;

  }
    a.active {
    border-bottom: 2px solid #0f0;
    border-left: 0;
    padding: 1em 0;

  }
	}
`;
function MenuList({isOpen}) {
	return (
		<StyledMenuList className={isOpen ? "isVisible" : ""}>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/services">Services</NavLink>
			</li>
			<li>
				<NavLink to="/about-us">About Us</NavLink>
			</li>
			<li>
				<NavLink to="/blog">Blog</NavLink>
			</li>
			<li>
				<NavLink to="/contact-us">Contact Us</NavLink>
			</li>
		</StyledMenuList>
	);
}

export default MenuList;
