import React, {Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import LoginComponent from '../../components/LoginComponent/index';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/userInfo';

/*
 * 1.将store中userInfo状态赋值给组件的属性
 * 2.将actions动作赋值给属性
 * */
@connect(
    state => (
        {userInfo: state.userInfo}   /*返回的对象key是reducer的名称*/
    ),
    {...actions}
)
export default class Login extends Component {

    //定义一个状态来表示是否登陆
    constructor() {
        super();
        this.state = {Login: false}
        /*相当于没有获得 到数据则显示正在加载中...*/
        /*默认不显示登陆组件*/
    }

    componentDidMount() {
        this.checkIsLogin();  //检测store中是否存在username状态值
    }

    //检查是否登陆,如果登陆则跳转,如果没登陆则改变state.Login状态,显示登陆组件
    checkIsLogin = () => {
        //检查redux状态中是否有username,如果有则代表登陆
        if (this.props.userInfo.username) {//如果登陆过,则直接跳转到用户页
            this.props.history.push(encodeURIComponent('/user'));
        }
        //如果上述条件不成立,则代表没有登陆,则显示登陆组件
        this.setState({
            Login: true   //显示登陆组件
        })
    };

    //需要定义一个方法,用来将登陆信息存储到redux状态中,然后将此方法传递给登陆UI组件调用
    login = (username) => {
        //获取store中的状态对象
        let info = this.props.userInfo;
        //向状态对象中增加username属性
        info.username = username;
        //然后更新store中的状态对象
        this.props.update(info);
        //登陆成功后跳转到用户页面
        //或者
        //如果是购买页过来的,则登陆之后跳转回购买页
        if (this.props.match.params.route) {
            //需要解码路径才可以跳转回去;
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
        } else {
            this.props.history.push('/user');
        }
    };

    render() {
        return (
            <div>
                <HeaderComponent title={'登录'} history={this.props.history}/>
                {/*如果未登录则显示登录页,如果登陆过则显示用户页*/}
                {this.state.Login ? <LoginComponent login={this.login}/> : ''}
            </div>
        )
    }
}
