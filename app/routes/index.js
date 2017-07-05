//默认也是一个组件
import React, {Component} from 'react';
//路由分为两种:HashRouter(开发)、BrowserRouter(上线)
import {
    HashRouter as Router,  //承载Route路由的容器
    Route,
    Switch, /*不加switch,路由匹配相当于if elseif只要满足就一直匹配,switch这样匹配一次就不再继续匹配了*/
    Redirect
} from 'react-router-dom';
import Home from '../containers/Home/index'
import Detail from "../containers/Detail/index";
import Login from "../containers/Login";
import User from "../containers/User";
import City from "../containers/City";
import Search from "../containers/Search";
export default class RouterMap extends Component {  //导出组件到根页面中


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/login/:route?' component={Login}/>  {/*为了登陆之后再跳会到登陆之前浏览的页面,需要将url拼接到路由后面*/}
                        <Route path='/user' component={User}/>
                        <Route path='/city' component={City}/>
                        <Route path='/search/:categories/:keyword?' component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
