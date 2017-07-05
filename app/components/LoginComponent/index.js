import React, {Component} from 'react';
import './index.less';
export default class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {  //存放受控组件input内的值
            val: ''
        }
    }

    changeValue = (e) => {
        /*
         * ref
         * 受控组件（受state状态控制,不能主动写,需要绑定onChange事件）   onChange+state
         * 非受控
         * */
        let val = e.target.value;
        this.setState({   //将输入框中的内容传入到state中
            val
        })

    };

    login = () => {
        let username = this.state.val;
        this.props.login(username);

    };

    render() {
        return (
            <div className="login-component">
                <input ref='username' onChange={this.changeValue} placeholder="请输入用户名" value={this.state.val}
                       type="text"/>
                <button className="back" onClick={this.login}>登陆</button>
            </div>
        )
    }
}
