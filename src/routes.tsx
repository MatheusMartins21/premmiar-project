import {
  Routes as Switch,
  Route
} from "react-router-dom"

import Home from "./pages/Home"
import Admin from "./pages/Admin"

const Routes = () => {
	return(
		<Switch>
			<Route path="/" element={ <Home /> } />
			<Route path="/admin" element={ <Admin /> } />
		</Switch>
	)
}

export default Routes;