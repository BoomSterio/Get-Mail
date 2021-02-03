import React, {Component} from 'react'
import {Layout} from 'antd'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import store from './redux/redux-store'
import Mail from './components/Mail/Mail'
import Header from './components/Header/Header'
import MessageViewer from './components/MessageViewer/MessageViewer'
import {initializeApp} from './redux/app-reducer'
import {LoadingOutlined} from '@ant-design/icons'

class App extends Component {
    catchUnhandledErrors = (promiseRejectionEvent) => {
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <LoadingOutlined size={'large'}/>
        }

        return (
            <Layout>
                <Header />
                <Layout.Content style={{ padding: '0 3.5vw', marginTop: 64 }}>
                    <div className={'content'}>
                        <Switch>
                            <Route path="/body/:id?" render={() => <MessageViewer/>}/>
                            <Route path="/mail" render={() => <Mail/>}/>
                            <Route path="*" render={() => <div>404<br/>PAGE NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </Layout.Content>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized})

let AppContainer = compose (
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
