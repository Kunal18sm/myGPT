import "./chatwindow.css";
import Chat from './Chat';
import { MyContext } from './MyContext';
import { useContext } from "react";


function Chatwindow() {

  const { userPrompt, setUserPrompt, reply, setReply, currentThreadId } = useContext(MyContext);

  const getReply = async () => {
    
    console.log("message ", userPrompt, " threadId ", currentThreadId);
    
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify ({
        threadId: currentThreadId,
        message: userPrompt,
      })
    }

    try {
      console.log("chal raha h biduu");
      
      const response = await fetch("http://localhost:8080/api/chat",options);
      // const res = await response.json();
      console.log("msttttttttttttt");
      
      console.log(response);
      
    } catch (err) {
      console.log(err);

    }

  }


  return (
    <div className="chatwindow">
      <div className="navbar">
        <span>MyGpt &nbsp;<i className="fa-solid fa-angle-down"></i></span>
        <div className="userIconDiv">
          <i className="fa-solid fa-user userIcon"></i>
        </div>
      </div>
      <Chat />

      <div className="chatInput">
        <div className="inputBox">
          {/* INPUT  */}
          <input
            type="text"
            placeholder="Ask anything"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
          />

          {/* SUBMIT ICON  */}
          <div className="submit"
            onClick={getReply}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
        <p className="info">
          I’m using a free-tier API with usage limits. If it doesn’t respond, please try again later.        </p>
      </div>
    </div>
  )
}

export default Chatwindow;