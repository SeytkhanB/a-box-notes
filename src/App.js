
import {useState} from 'react'
import Boxes from './Boxes'
import Box from './Box'
import './App.css'

export default function App() {
	const [squares, setSquares] = useState(Boxes)

	// const squareElements = squares.map(square => {
	// 	<Box key={square.id} on={square.on} />
	// })
	// THIS WAY ABOVE IS WRONG BECAUSE {} INSTEAD OF ()

	const squareElements = squares.map(square => (
		<Box key={square.id} on={square.on} />
	))

	return (
		<main>
			{squareElements}
		</main>
	)
}
