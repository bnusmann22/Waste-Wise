import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";

const StyledForm = styled.form`
	/* position: relative; */
	/* width: 5em; */
`;
const FormGroup = styled.section`
	position: absolute;
	top: 5em;
	right: 0;
	display: none;

	svg {
		position: absolute;
		top: 50%;
		left: 1em;
		transform: translateY(-50%);
		color: #fff;
		transition: color 0.3s ease-in-out;
	}
	&.isVisible {
		display: block;
	}

	@media (min-width: 992px) {
		display: block;
		position: relative;
		top: 0;
	}
`;
const Input = styled.input`
	background-color: #313131;
	padding: 0.5em 2.5em;
	border-radius: 2em;
	color: #fff;
`;
const SearchIcon = styled(IoSearch)`
	color: #fff;
`;

const SCREEN_SIZE = 992;
function Search() {
	const [isVisible, setIsVisible] = useState(() => window.innerWidth < SCREEN_SIZE);
	const [isOpen, setIsOpen] = useState(false)
	function handleClick() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < SCREEN_SIZE) {
				setIsVisible(true);
				setIsOpen(false);
			} else {
				setIsVisible(false);
			}
		}
		window.addEventListener("resize", handleResize);
	}, []);
	return (
		<>
			{isVisible && (
				<button onClick={handleClick}>
					<SearchIcon />
				</button>
			)}
			<StyledForm>
				<FormGroup className={isOpen ? "isVisible" : ""}>
					<label htmlFor="search"></label>
					<Input type="search" />
					<SearchIcon />
				</FormGroup>
			</StyledForm>
		</>
	);
}

export default Search;
