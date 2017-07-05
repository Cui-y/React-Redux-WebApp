import React, {Component} from 'react';
import './index.less';
export default class ChooseCity extends Component {

    selectCity = (e) => {
        let city = e.target.innerText;
        this.props.changeCity(city);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="choose-city">
                <h3>选择城市</h3>
                <ul onClick={this.selectCity}>
                    <li>杭州</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>深圳</li>
                    <li>成都</li>
                    <li>武汉</li>
                    <li>太原</li>
                    <li>石家庄</li>
                    <li>兰州</li>
                    <li>南京</li>
                    <li>天津</li>
                    <li>呼和浩特</li>
                </ul>
            </div>
        )
    }
}
