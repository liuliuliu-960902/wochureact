import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout} from 'antd';
import 'antd/dist/antd.css'
import "./liu.css"

import SideMenu from './SideMenu';
import TopHeader from './TopHeader';
import Management from '../FoodInformation/Management';
import FootShow from '../FoodShow/FootShow';
import Home from '../Home/Home';
import Users from '../UserList/Users';
import FrontDeskUsers from '../UserList/FrontDeskUsers';

const {  Content } = Layout;
const routers = [
    {
        path:"/foodinformation/management",//菜品管理
        component:Management
    },
    {
        path:"/UserList/frontdeskusers",//前台用户管理
        component:FrontDeskUsers
    },
    {
        path:"/footshow/footshow",//菜品展示管理
        component:FootShow
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/UserList/users",//用户管理
        component:Users
    }
]
export default class DashBoard extends Component {
    state = {
        collapsed: false,
    };
    render() {

        return (
            <Layout>
                <SideMenu></SideMenu>
              
                <Layout className="site-layout">
                   <TopHeader></TopHeader>
                   {/* 配置路由 */}
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {
                                routers.map(item=>{
                                    return <Route path={item.path} component={item.component} key={item.path} />
                                })
                            }
                        <Redirect from="/" to="/home" exact/>


                        </Switch>
              </Content>
                </Layout>
            </Layout>
        )
    }
}
