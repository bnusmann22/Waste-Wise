import { lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
