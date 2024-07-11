import styled from "styled-components";

const StyledHero = styled.section`
  

`

function Hero() {
	return (
		<StyledHero>
			<section>
				<img src="/images/main-bg.jpg  " alt="" />
			</section>
			<section>
				<h1>Manage Waste with Ease</h1>
				<p>
					WasteWise Lagos Mainland's Leading Waste Management App for Efficient
					and Sustainable Solutions
				</p>
			</section>
		</StyledHero>
	);
}

export default Hero;
