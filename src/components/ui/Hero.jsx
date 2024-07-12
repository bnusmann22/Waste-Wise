/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Cta from "./Cta";

const StyledHero = styled.section`
	grid-column: 1/-1;
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: auto;
	height: calc(100vh - 5em);
`;
const HeroImgContainer = styled.section`
	grid-column: 1/-1;
	grid-row: 1;
	overflow: hidden;

	img {
		object-fit: cover;
		object-position: center center;
		height: 100%;
		width: 100%;
	}
`;

const HeroContents = styled.section`
	grid-column: 2;
	grid-row: 1;
	background-color: rgba(255, 255, 255, 0.5);
	align-self: end;
	padding: 1.5em;
	max-width: 650px;
	width: 100%;
	border-radius: 1em;
	margin-bottom: 4em;

	p {
		font-size: 1.5em;
		font-size: clamp(1em, 4vw, 1.5em);
		font-weight: bold;
		margin: 0.4em 0;
	}

	span {
		color: #209503;
	}

	@media(min-width: 510px){
		margin-bottom: 2em;
	}
`;
const CtaContainer = styled.section`
	display: flex;
	gap: 0.8em;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;

	@media(min-width: 510px){
	justify-content: flex-start;
	}
`;

function Hero() {
	return (
		<StyledHero>
			<HeroImgContainer>
				<img src="/images/main-bg.jpg  " alt="" />
			</HeroImgContainer>

			<HeroContents>
				<h1>Manage Waste with Ease</h1>
				<p>
					<span>WasteWise</span> Lagos Mainland's Leading Waste Management App
					for Efficient and Sustainable Solutions
				</p>
				<CtaContainer>
					<Cta to="#">Explore Our Services</Cta>
					<Cta $variant="outline" to="#">
						Contact Us
					</Cta>
				</CtaContainer>
			</HeroContents>
		</StyledHero>
	);
}

export default Hero;
