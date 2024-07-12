import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Cta = styled(Link)`
	${(props) => {
		switch (props.$variant) {
			case "outline":
				return css`
					background-color: transparent;
					color: #000;
					border: 1px solid #000;
					padding: 0.5em 1em;
					font-size: 1.2em;
					cursor: pointer;
					transition: background-color 0.3s ease;
				`;
      
      default:
        return css`
          background-color: #209503;
					color: #fff;
					border: 1px solid #209503;
					padding: 0.5em 1em;
					font-size: 1.2em;
					cursor: pointer;
					transition: background-color 0.3s ease;
          
        `;

		}
	}}
`;

export default Cta;
