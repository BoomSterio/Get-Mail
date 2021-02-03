import React from 'react'
import styles from './MessageViewer.module.css'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import {Button} from 'antd'
import {ArrowLeftOutlined} from '@ant-design/icons'

const MessageViewer = () => {
    const history = useHistory()

    const id = history.location.pathname.slice(6)        //cutting '/body/'
    const message = useSelector(state => state.mail.messages[id])

    const handleBackClick = () => {
        history.goBack()
    }

    return (
        <div className={styles.item}>
            <Button danger type={'link'} icon={<ArrowLeftOutlined/>} onClick={handleBackClick}/>
            <h3 className={styles.subject}>
                {message?.subject}
            </h3>
            <div>
                {message?.body}
            </div>
        </div>
    )
}

export default MessageViewer