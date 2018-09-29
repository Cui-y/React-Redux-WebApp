import React, {Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/userInfo';
import CurrentCity from "../../components/CurrentCity/index";
import ChooseCity from "../../components/ChooseCity/index";
@connect(
    state => (
        {userInfo: state.userInfo}
    ),
    {...actions}
)

export default class City extends Component {


    changeCity = (city) => {
        this.props.update({...this.props.userInfo,city});  /*传递对象*/
    };

    render() {
        return (
            <div className="city">
                {/*头*/}
                <HeaderComponent history={this.props.history} title='选择城市'/>
                {/*显示当前城市*/}
                <CurrentCity city={this.props.userInfo.city}/>
                {/*选择城市*/}
                <ChooseCity history={this.props.history} changeCity={this.changeCity}/>
            </div>
        )
    }
}
