
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Results } from "./pages/Results";
import { Winners } from "./pages/winners";
import { Games } from "./pages/games";
import  Home from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import About from "./pages/About";


function App() {
	const routes = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="games" element={<Games />} />
				<Route path="results" element={<Results />} />
				<Route path="winners" element={<Winners />} />
				<Route path="about" element={<About	 />} />
				<Route path="log-in" element={<LogIn />} />
			</Route>,
		),
	);

	return (
		<div className="App">
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
