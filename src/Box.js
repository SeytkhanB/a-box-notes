

export default function Box(props) {

    const styled = {
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div 
            className='box' 
            style={styled} 
            onClick={props.toggle}
        >
            <p>{props.on ? 'YES' : 'NO'}</p>
        </div>
    )
}
