import React, {Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad";
import List from "./subpage/List";
import {connect} from 'react-redux';
@connect(
    state => (
        {
            userInfo: state.userInfo
        }
    )
)

export default class Home extends Component {


    render() {
        return (
            <div>
                <HomeHeader history={this.props.history} cityName={this.props.userInfo.city}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.city}/>
            </div>
        )
    }
}
