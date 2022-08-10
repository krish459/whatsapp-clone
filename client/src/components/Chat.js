import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import React from 'react'
import './chat.css'
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useState } from 'react';
import axios from '../axios'

function Chat({messages}) {

    const[input,setInput] = useState("");

    const sendMessage = async(e) =>{
        e.preventDefault();

        await axios.post('/api/messages/new', {
            name: 'Krish',
            message: input,
            received: true
        })
        setInput("")

    }

  return (
    <div className='chat'>
        <div className="chat_header">
            <Avatar/>

            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Laste seen at ..</p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            {messages.map(message=>(

            <p className={`chat_message ${message.received && 'chat_reciever'}`}>
                <span className="chat_name">
                    {message.name}
                </span>
                {message.message}
                <span className="chat_timestamp">
                    {new Date().toUTCString()}
                </span>
                
            </p>

            ))}
            {/* <p className='chat_message chat_reciever'>
                <span className="chat_name">
                    Sonny
                </span>
                
                This is a message
                <span className="chat_timestamp">
                    {new Date().toUTCString()}
                </span>
                
            </p> */}

        </div>
        <div className="chat_footer">
            <IconButton>
            <InsertEmoticonIcon/>
            </IconButton>
            <form>
                <input
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Type a message'
                    type='text'
                />
                {/* <button onClick={sendMessage} type="submit"> */}
                <button type="submit" onClick={sendMessage}>
                    Send
                </button>

            </form>
            <IconButton>
            <MicIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Chat