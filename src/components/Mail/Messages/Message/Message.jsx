import React, {useState} from 'react'
import styles from './Message.module.css'
import {Avatar, Checkbox, Col, List, Row, Space} from 'antd'
import {stringHelpers} from '../../../../utils/string-helpers'
import {StarFilled, StarOutlined} from '@ant-design/icons'

const Message = ({id, subject = 'Message', body, from, to, date, toggleChecked, openMessage}) => {
    const [favorite, setFavorite] = useState(false)

    const toItem = stringHelpers.formatArrayOfStrings(to, 1)
    const subjectItem = stringHelpers.formatString(subject, 35)
    const bodyItem = stringHelpers.formatString(body, 75)

    const toggleFavorite = () => {
        setFavorite(!favorite)
    }

    const handleChecked = () => {
        toggleChecked(id)
    }

    const handleMessageClick = () => {
        openMessage(id)
    }

    return (
        <List.Item style={{border: 'solid lightgrey', borderWidth: '0 0 2px 0'}} className={styles.item} >
            <Row style={{width: '100%', padding: '0 .4vw'}}>
                <Col span={1}>
                    <Space>
                        <Checkbox onClick={handleChecked}/>
                        <div onClick={toggleFavorite} className={favorite ? styles.favorite : styles.notFav} >
                            {favorite ? <StarFilled/> : <StarOutlined/>}
                        </div>
                    </Space>
                </Col>
                <Col span={23} onClick={handleMessageClick} >
                    <Row>
                        <Col span={4}>
                            {/*<Avatar src={img}/>*/}
                            <span>{from}</span>
                        </Col>
                        <Col span={4}>
                            <span>{toItem}</span>
                        </Col>
                        <Col span={4}>
                            <span>{subjectItem}</span>
                        </Col>
                        <Col span={9}>
                            <span>{bodyItem}</span>
                        </Col>
                        <Col span={2}>
                            <b>{date}</b>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </List.Item>
    )
}

export default Message