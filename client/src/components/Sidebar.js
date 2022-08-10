import React from 'react'
import './sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <Avatar src="https://www.pikpng.com/pngl/m/113-1139491_lannan-on-twitter-lazarbeam-face-sticker-clipart.png"/>
            <div className="sidebar_headerRight">
               <IconButton>
               <DonutLargeIcon/>
               </IconButton>
               <IconButton>
               <ChatIcon/>
               </IconButton>
               <IconButton>
               <MoreVertIcon/>
               </IconButton>
            </div>
        </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon/>
                    <input placeholder='Search or Start new chat' type="text" />
                    
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
           
    </div>
  )
}

export default Sidebar