const Message = ({message}) => {
    return (   
        <li key={message.senderId}>
            <div>
            {message.senderId}
            </div>
            <div>
            {message.message}
            </div>
        </li>
        ) 
}

export default Message