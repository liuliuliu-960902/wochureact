import React, { Component } from 'react'
import {HashRouter,Redirect,Route,Switch} from "react-router-dom"
import Login from '../views/Login/Login'
import DashBoard from "../views/DashBoard/DashBoard"
export default class Router extends Component {
    render() {
        return (
            
                <HashRouter>
                       <Switch>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/" render={
                        ()=>
                            localStorage.getItem("token")?<DashBoard></DashBoard>:<Redirect to="/login"/>
                        
                    }/>
                        </Switch> 
                </HashRouter>
            
        )
    }
}
