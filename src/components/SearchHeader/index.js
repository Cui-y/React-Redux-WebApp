import React, {Component} from 'react';
import SearchInput from "../SearchInput/index";
import './index.less';

export default class SearchHeader extends Component {


    back = () => {
        this.props.history.go(-1);
    };



    render() {
        return (
            <div className="search-header back">
                <i className="iconfont icon-fanhui" onClick={this.back}></i>
                <div className="search-input">
                    <i className="iconfont icon-sousuo search"></i>
                    <SearchInput value={this.props.value} toSearch={this.props.toSearch} />
                </div>
            </div>
        )
    }
}
