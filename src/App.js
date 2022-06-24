
import {useState} from 'react'
import Boxes from './Boxes'
import Box from './Box'
import './App.css'

export default function App() {
	const [squares, setSquares] = useState(Boxes)

	function toggle(id) {
		setSquares(prevSquares => {
			return prevSquares.map(square => {
				return square.id === id ? {...square, on: !square.on} : square
			})
		})
	}

	const squareElements = squares.map(square => (
		<Box
			key={square.id}
			on={square.on}
			toggle={() => toggle(square.id)}
		/>
	))

	return (
		<main>
			{squareElements}
		</main>
	)
}
