import {
  MinChatUiProvider,
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader
} from "@minchat/react-chat-ui";
import myColorSet from "../../variables/colorSet";
import dummy from "../../variables/dummy";

function ChatWindow() {
  return (
    <MinChatUiProvider colorSet={myColorSet}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "inherit"
        }}
      >
        <MainContainer
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",  
            maxWidth: "100vw", 
            height: "100vh", 
            boxShadow: "0px 0px 15px rgba(0,0,0,0.1)", 
           
          }}
        >
          <MessageContainer>
            <MessageHeader />
            <MessageList
              currentUserId="dan"
              messages={dummy.map(message => ({...message, isSender: message.id === "user1"}))}
            />
          </MessageContainer>
          <MessageInput placeholder="Type message here" />
        </MainContainer>
      </div>
    </MinChatUiProvider>
  );
}

export default ChatWindow;
