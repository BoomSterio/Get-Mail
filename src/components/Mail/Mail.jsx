import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {requestMessages} from '../../redux/mail-reducer'
import Messages from './Messages/Messages'

const Mail = () => {
    const messages = useSelector(state => state.mail.messages)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestMessages())
    }, [])

    return (
        <Messages messages={messages} />
    )
}

export default Mail