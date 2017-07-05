import React, {Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/comment";
import Buy from "../../components/Buy/index";
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/collection'

//通过路由渲染的组件,例如Home、Detail页面级组件,都会在this.props属性上增加三个属性，
/*
 * 1.history 跳转
 * 2.match 获取路径参数
 * 3.location pathname等
 * */

@connect(
    state => (
        {
            userInfo: state.userInfo,
            collectionList: state.collectionList
        }
    ),
    {...actions}
)
export default class Detail extends Component {


    //头部
    //商户信息
    //收藏、购买
    //评论

    //由于要维护一个收藏、未收藏这样一个状态,需要新建一个状态
    constructor() {
        super();
        //通过商户ID去redux中去查找是否存在收藏列表状态中,如果存在则将isCollected改为true
        this.state = {
            isCollected: false
        }
    }


    //页面渲染之后先获取redux中的收藏列表[]
    componentDidMount() {
        let id = this.props.match.params.id;
        let flag = this.props.collectionList.find((item) => {
            return item === id;
        });
        if (flag) {
            this.setState({
                isCollected: true
            })
        }
    }

    //验证是否登陆
    checkIsLogin = () => {
        //登陆过则返回true,否则返回false
        let username = this.props.userInfo.username;
        if (username) {
            return true;
        }
        return false;

    };

    collection = () => {
        //验证是否登陆,如果未登陆则跳转到登陆页,登陆之后再跳转回商户详情页
        let flag = this.checkIsLogin();
        let id = this.props.match.params.id;
        if (flag) {
            if(this.state.isCollected){
                this.props.del(id);
            }else{
                this.props.add(id);
            }
            this.setState({
                isCollected: !this.state.isCollected
            })
        } else { //没有登陆则跳转到登录页,成功登陆之后再返回此页面,需要转码:route
            this.props.history.push(`/login/${encodeURIComponent(`/detail/${this.props.match.params.id}`)}`)
        }

    };

    buy = () => {
        //验证是否登陆,如果未登陆则跳转到登陆页,登陆之后再跳转回商户详情页,然后点击购买跳转到用户中心
        let flag = this.checkIsLogin();
        if (flag) {
            this.props.history.push('/user');
        } else {
            //登陆成功后再返回当前页
            this.props.history.push(`/login/${encodeURIComponent(`/detail/${this.props.match.params.id}`)}`)
        }
    };

    render() {
        return (
            <div>
                {/*头*/}
                <HeaderComponent title={'商户详情'} history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*收藏和购买*/}
                <Buy isCollected={this.state.isCollected} collection={this.collection} buy={this.buy} />

                {/*商户评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}
