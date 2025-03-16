const AcceptButton = ({value, color, action}) => {
    return (
        <button type="submit" style={{backgroundColor: color, borderRadius: 16}} onClick={action}>{value}</button>
    )
}

export default AcceptButton