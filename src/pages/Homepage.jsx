import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Hero from "@/components/ui/Hero";
import Main from "@/components/ui/Main";
import NewsSection from "@/components/ui/News";
function Homepage() {
	return (
		<>
			<Navbar />
			<Main>
				<Hero />
				<Features />
				<News/>
			</Main>
		</>
	);
}

export default Homepage;
