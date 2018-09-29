import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getInfo} from '../../../../fetch/detail'
import InfoComponent from "../../../components/InfoComponent/index";
//此组件主要是fetch后台数据,然后传递给对应的傻瓜组件进行渲染
export default class Info extends Component {
    //有数据再显示,没有数据显示正在加载
    constructor() {
        super();
        this.state = {
            data:false
        }
    }

    componentDidMount() {
        let id = this.props.id;
        getInfo(id).then(data => {
            console.log(data);
            this.setState({
                data
            })
        })
    }

    render() {
        return (
            <div className="info">
                {
                    this.state.data?<InfoComponent data={this.state.data}/>:<div>正在加载...</div>
                }
            </div>
        )
    }
}
