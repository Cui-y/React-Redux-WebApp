import React, {Component} from 'react';
import './index.less';

//只有路由渲染的组件才有history属性,此组件没有，则需要Detail组件传递
export default class HeaderComponent extends Component {


    render() {
        return (
            <div className="header-component back">
                <i className="iconfont icon-fanhui" onClick={()=>this.props.back?this.props.history.push(this.props.back):this.props.history.go(-1)}></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
