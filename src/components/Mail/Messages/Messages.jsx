import React, {useState} from 'react'
import moment from 'moment'
import Message from './Message/Message'
import {Button, DatePicker, Empty, List, Popconfirm, Radio, Space} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import MessagesHeader from './MessagesHeader/MessagesHeader'
import {useDispatch} from 'react-redux'
import {deleteMessages} from '../../../redux/mail-reducer'
import {useHistory} from 'react-router'

const Messages = (props) => {
    const [dateSort, setDateSort] = useState(true)
    const [dateMode, setDateMode] = useState(false)
    const [checked, setChecked] = useState([])

    const history = useHistory()
    const dispatch = useDispatch()

    const toggleDateSort = () => {
        setDateSort(!dateSort)
    }

    const handleModeChange = (e) => {
        setDateMode(e.target.value)
    }

    const disabledDate = (current) => {
        return current > moment().endOf('day')
    }

    const toggleChecked = (id) => {
        if (checked.some(m => id === m)) {
            setChecked([...checked].filter(m => id === m))
        } else {
            setChecked([...checked, id])
        }

    }

    const handleDelete = () => {
        dispatch(deleteMessages(checked))
        setChecked([])
    }

    const openMessage = (id) => {
        history.push(`/body/${id}`)
    }

    let messageItems = [...props.messages]
        .sort((a, b) => dateSort ? (a.id < b.id ? 1 : -1) : (a.id >= a.id ? 1 : -1)).map(m =>
        <Message key={m.id} id={m.id} body={m.body} subject={m.subject} from={m.from} to={m.to} date={m.date}
                 toggleChecked={toggleChecked} openMessage={openMessage}/>)

    return (
        <>
            <Space direction="vertical">
                <Space>
                    <Radio.Group onChange={handleModeChange} buttonStyle={'solid'} value={dateMode}>
                        <Radio.Button value={'date'}>Date</Radio.Button>
                        <Radio.Button value={'range'}>Range</Radio.Button>
                    </Radio.Group>
                    {dateMode === 'range' ?
                        <DatePicker.RangePicker disabledDate={disabledDate}/>
                        :
                        <DatePicker disabledDate={disabledDate}/>}
                </Space>
                <Space>
                    <h3>Results: {props.messages.length} mail(s)</h3>
                    <Popconfirm
                        title="Delete selected messages?"
                        onConfirm={handleDelete}
                        disabled={!checked.length}
                        okText="Yes"
                        cancelText="No">
                        <Button danger type={'link'} icon={<DeleteOutlined/>}/>
                    </Popconfirm>
                </Space>
            </Space>

            <div style={{border: 'solid lightgrey', borderWidth: '2px 0', padding: '0.5vw 0'}}>
                <MessagesHeader dateSort={dateSort} handleDateClick={toggleDateSort}/>
            </div>
            <List>
                {!props.messages.length ?
                    <Empty style={{marginTop: '2vw'}} image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No messages'}/>
                    :
                    messageItems}
            </List>
        </>
    )
}

export default Messages