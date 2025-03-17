const BarItem = (props) => {
    return (
        <div style={{color: props.color ?? "white", font: props.font ?? "20px Arial, sans-serif", top: 0}}>
            <p>{props.name}</p>
        </div>
    )
}

export default BarItem