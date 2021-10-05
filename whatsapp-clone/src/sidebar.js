import React from 'react';
import './sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './sidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerRight'></div>
                <IconButton>
                    <DonutLargeIcon></DonutLargeIcon>
                </IconButton>
                <IconButton>
                    <ChatIcon></ChatIcon>
                </IconButton>
                <IconButton>
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>
            </div>


            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined/>
                    <input placeholder='Search or start new chat' type='text'/>
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
