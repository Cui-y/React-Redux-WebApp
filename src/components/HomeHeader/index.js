import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import SearchInput from "../SearchInput/index";
export default class HomeHeader extends Component {


    toSearch = (keyword) => {
        this.props.history.push('/search/all/' + keyword);  /*当跳转到搜索页后,页面可以通过this.props.match.keyword得到输入框的值*/
    };

    render() {
        return (
            <div className="home-header back">
                <Link to='/city'>
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-xia"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo"></i>
                    <SearchInput value='' toSearch={this.toSearch}/>
                </div>
                <Link to='/login'>
                    <div className="userInfo">
                        <i className="iconfont icon-geren"></i>
                    </div>
                </Link>
            </div>
        )
    }
}
