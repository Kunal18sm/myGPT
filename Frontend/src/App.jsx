import Sidebar from './Sidebar';
import Chatwindow from './Chatwindow';
import { MyContext } from "./MyContext";
import { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';


import './App.css'

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currentThreadId, setCurrentThreadId] = useState(uuidv1());

  const providerValues = {
    userPrompt, setUserPrompt, reply, setReply, currentThreadId
  };

  return (
    <div className="main">
      <MyContext.Provider value={providerValues}>
        <Sidebar />
        <Chatwindow />
      </MyContext.Provider>
    </div>
  )
}

export default App
