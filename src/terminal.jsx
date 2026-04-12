import { useState, useEffect } from "react";
import "./App.css";
import "./terminal.css";

function Terminal() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:9090");
    setSocket(ws);
    ws.onopen = () => {
      console.log("WebSocket open");

      ws.send(JSON.stringify({
        op: "subscribe",
        topic: "/chatter"
        }
      ));

      setMessages(prev => [
        ...prev,
        '> Subscribed to topic "/chatter"'
      ]);
    }
    ws.onmessage = (event) => setMessages((oldStuff) => [...oldStuff, event.data]);
    ws.onclose = () => console.log("WebSocket closed");
    return () => ws.close();
  }, []);
  
  const sendMessage = () => {
    if (input && socket) {
      setMessages((prev) => [...prev, `> ${input}`]);
      
      socket.send(input);
      console.log("sending input: "+ input);
      setInput("");
    }
  };

  // const [isTyping, setIsTyping] = useState(false);
  // const handleTyping = (e) => {
  //   setInput(e.target.value);
  //   setIsTyping(true);
  //   setTimeout(() => setIsTyping(false), 1000);
  // };

    

  return (
    <div className="Terminal">
      <div className="cmd-box">
        {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
        ))}
      </div>
      {/* {isTyping && <p>Typing…</p>} */}
      {/* <input
        value={input}
        onChange={handleTyping}
        placeholder="Text input..."
      /> */}
      {/* <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Say something wild..."
      />
      <button onClick={sendMessage}>Send It</button> */}
    </div>
  );
}
export default Terminal;