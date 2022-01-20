import React,{ useState } from 'react'
import {Layout,Menu } from 'antd'
import http from "./http/index";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import NavTop from "./container/navTop";
import NavLeft from './container/navLeft'
import MindMapping from './components/mingMapping/index'
const { Header, Sider, Content } = Layout;

class SliderContent extends React.Component {
    state = {
        collapsed: false,
    };
    componentDidMount() {
        console.log("当前环境变量："+import.meta.env.VITE_APP_URL,http)
        this.getMenu()
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    getMenu = () => {

    }

    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: '0 15px' }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

function App() {

  return (
      <div id="app" >
          <SliderContent />
      </div>
  )
}

export default App
