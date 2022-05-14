import {
  Routes as Switch,
  Route
} from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from './pages/Products/ProductDetail'

const Routes = () => {
	return(
		<Switch>
			<Route path="/" element={ <Home /> } />
			<Route path="/products" element={ <Products /> } />
			<Route path="/products/:uuid" element={ <ProductDetail /> } />
		</Switch>
	)
}

export default Routes;