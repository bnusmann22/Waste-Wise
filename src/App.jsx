import { lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage"

function App() {
	return (
		//<BrowserRouter>
			//<Routes>
	//	<Route index element={<Homepage/>} />
	//</Routes>
		//</BrowserRouter>
		<>
		 <Homepage />
		</>
	);
}

export default App;
