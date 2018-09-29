import React, {Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import UserInfo from "../../components/UserInfo/index";
import OrderList from "./subpage/OrderList";

/*从redux中获取用户名*/
@connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)

export default class User extends Component {


    render() {
        return (
            <div className="user">
                {/*手动指定跳回的页面 back*/}
                <HeaderComponent title={'个人中心'} history={this.props.history} back="/"/>
                <UserInfo username={this.props.userInfo.username} city={this.props.userInfo.city} />
                {/*用户订单*/}
                <OrderList username={this.props.userInfo.username}/>
            </div>
        )
    }
}
