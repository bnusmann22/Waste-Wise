import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Hero from "@/components/ui/Hero";
import Main from "@/components/ui/Main";
function Homepage() {
	return (
		<>
			<Navbar />
			<Main>
				<Hero />
				<Features />
			</Main>
		</>
	);
}

export default Homepage;
