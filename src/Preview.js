import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetCameraImage, selectCameraImage } from './features/cameraSlice'
import './Preview.css'
import {v4 as uuid} from "uuid";
import { storage} from 'firebase'

function Preview() {
    const cameraImage = useSelector(selectCameraImage)
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
       if(!cameraImage) {
           history.replace('/')
       } 
    },[cameraImage, history])

    const closePreview = () => {
        dispatch(resetCameraImage());
    }

    const sendPost = () => {
        const id = uuid();
    }

    return (
        <div className="preview">
            <Close onClick={closePreview} className="preview__close" />
            <div className="preview__toolbarRight">
                <TextFields />
                <Create/>
                <Note/>
                <MusicNote/>
                <AttachFile/>
                <Crop/>
                <Timer/>
            </div>
            <img src={cameraImage} alt="pic" />
            <div onClick={sendPost} className="preview__footer">
                <h2>Send Now</h2>
                <Send fontSize="small" className="preview__sendIcon" />
            </div>
        </div>
    )
}

export default Preview
