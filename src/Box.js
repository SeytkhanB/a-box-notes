
import { useState } from "react"

export default function Box(props) {
    const [on, setOn] = useState(props.on)

    const styled = {
        backgroundColor: on ? 'green' : 'red'
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <div className='box' style={styled} onClick={toggle} >
            <p>{on ? 'YES' : 'NO'}</p>
        </div>
    )
}
