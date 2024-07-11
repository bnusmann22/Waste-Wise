/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMenuList = styled.ul`
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
    padding: 1em 0;
    border-bottom: 1px solid transparent;

	}
  a.active {
    border-bottom: 2px solid #0f0;
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
