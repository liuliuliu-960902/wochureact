import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {withRouter} from "react-router-dom"
// import {

//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     TeamOutlined
// } from '@ant-design/icons'
import menu from "./menu"
const { SubMenu } = Menu;
const { Sider } = Layout;
 class SideMenu extends Component {
    state = {
        collapsed: false,
    };
    render() {
        return (

            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" >我厨的后台系统</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                onClick={(item)=>{
                    console.log(item.key)
                    this.props.history.push(item.key)
                }}
                >
                    {/* <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                </Menu.Item>
                <SubMenu key="sub2" icon={<VideoCameraOutlined/>} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                <SubMenu key="sub3" icon={<UploadOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu> */}
                    {this.renderItem(menu)}
                </Menu>
            </Sider>
        )
    }
    renderItem(data) {
        return data.map(item => {



            if (item.children) {
                return <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
                    {this.renderItem(item.children)}

                </SubMenu>
            }
        return <Menu.Item key={item.key} icon={<item.icon />}>{item.title}</Menu.Item>
        
        })
    }
}

export default withRouter(SideMenu) 
