import { Avatar } from '@material-ui/core'
import { StopRounded } from '@material-ui/icons'
import React from 'react'
import './Chat.css'

function Chat({ id, username, read, imageUrl, profilePic, timestamp}) {
    return (
        <div className="chat">
            <Avatar src={profilePic} className="chat__avatar" />
            <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to view - {new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>

            {!read && <StopRounded className="chat__readIcon" /> }
        </div>
    )
}
export default Chat