import React, { Component } from 'react'
import { Layout} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
 
} from '@ant-design/icons'
const { Header} = Layout;
export default class TopHeader extends Component {
    state = {
        collapsed: false,
    };
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
            })}
        </Header>
        )
    }
}
