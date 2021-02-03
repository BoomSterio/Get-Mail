import {Col, Row} from 'antd'
import {CaretDownOutlined, CaretUpOutlined} from '@ant-design/icons'

const MessagesHeader = (props) => {
    return (
        <Row style={{width: '100%', padding: '0 .4vw', color: 'grey', backgroundColor: 'F0F0F0'}}>
            <Col span={1}/>
            <Col span={4}>
                <span>From</span>
            </Col>
            <Col span={4}>
                <span>To</span>
            </Col>
            <Col span={4}>
                <span>Subject</span>
            </Col>
            <Col span={9}>
                <span>Body</span>
            </Col>
            <Col span={2}>
                <b>Date</b>
                <span onClick={props.handleDateClick}>
                    {props.dateSort ? <CaretUpOutlined/> : <CaretDownOutlined/>}
                </span>
            </Col>
        </Row>
    )
}

export default MessagesHeader