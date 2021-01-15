import { ExitToApp } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectSelectedImage } from './features/appSlice'
import './ChatView.css'

function ChatView() {
    const selectedImage = useSelector(selectSelectedImage)
    console.log(selectedImage)
    const history = useHistory();

    useEffect(() => {
        if(!selectedImage) {
            exit();
        }
    }, [selectedImage])

    const exit = () => {
        history.replace('/chats')
    }

    return (
        <div className="chatView">
            <img src={selectedImage} onClick={exit} alt="snap" />
        </div>
    )
}

export default ChatView
