import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
	width: 8em;
`;
function Logo() {
	return (
		<StyledLogo to="/">
			<img src="/images/WasteWise.svg  " alt="waste wise logo" />
		</StyledLogo>
	);
}

export default Logo;
