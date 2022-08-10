
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios';

function App() {
  const[messages,setMessages]= useState([]);

  useEffect(() => {
    axios.get('/api/messages/sync').then((response) => {
      setMessages(response.data);
    })
  }, [])
  

  useEffect(() => {
    var pusher = new Pusher('bc6552dfe5963e79ecc0', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
    
    
  }, [messages])
  console.log(messages);
  
  return (
    <div className="app">
<div className="app_body">
      {/* Sidebar */}
      <Sidebar/>
      {/* Chat */}
      <Chat messages={messages}/>

</div>
    </div>
  );
}

export default App;
