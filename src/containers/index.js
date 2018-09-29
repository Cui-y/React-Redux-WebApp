import React, {Component} from 'react';
import RouterMap from '../routes/index';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/userInfo';
import {getStorage} from '../local';
@connect(
    state => (
        {}
    ),
    {...actions}
)

export default class App extends Component { //根页面
    constructor() {
        super();
        this.state = {
            done: false
        }
    }

    componentDidMount() {
        let city = getStorage('city');
        if (city === null) {
            city = '北京';
        }
        //将城市更新回store状态树中
        this.props.update({
            city
        });

        this.setState({
            done: true
        })
    }

    render() {
        return (
            <div>
                {this.state.done ? <RouterMap/> : <div>页面加载中...</div>}
            </div>
        )
    }
}

