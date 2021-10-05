import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './chat.css'
import { SearchOutlined } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {
    return (
        <div className='chat'> 
            <div className='chat__header'>
                <Avatar />

                <div className='chat__headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last Seen at ....</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                <p className='chat__message'> 
                    <span className='chat__name'>
                        Hammad
                    </span>
                    This message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat__message chat__reciever'> 
                    <span className='chat__name'>
                        Hammad
                    </span>
                    This message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                
            </div>
            <div className='chat__footer'>
                    <InsertEmoticonIcon />
                    <form>
                        <input placeholder='Type a message' type='text' />
                        <button type='submit'>Send a Message</button>
                    </form>
                    <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
