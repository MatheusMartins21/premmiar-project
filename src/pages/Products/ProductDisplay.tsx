import { useParams } from 'react-router-dom'

function ProductDisplay() {
	const { uuid } = useParams();

	return (
		<>
			<h1>ProductDisplay</h1>
			<h2>{uuid}</h2>
		</>
	)
}

export default ProductDisplay;