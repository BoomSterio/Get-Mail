import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <Menu theme="dark" mode="horizontal" selectable={false} defaultSelectedKeys={['']}>
                <Menu.Item key="1"><Link to="/mail">All Mail</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/inbox">Inbox</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/sent">Sent</Link></Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default Header