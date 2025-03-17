import Message from "./Message"

const Messages = (props) => {
  return (
    <div>
        <ul>
           {props.msgs.map(message => {
                return <Message message={message}/>
           })}
        </ul>
    </div>
  )
}

export default Messages