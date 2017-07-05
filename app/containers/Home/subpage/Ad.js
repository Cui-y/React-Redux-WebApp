import React,{Component} from 'react';
import {getAd} from '../../../../fetch/home';
import './index.less'
export default class Ad extends Component{

    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    //凡是涉及到请求的，基本都是正在加载


    componentWillMount(){
        getAd().then(data=>{
            this.setState({
                data
            })
        })
    }
    
    render(){
        return (
            <div className="ad">
                <h3>超值优惠</h3>
                {
                    this.state.data.length?this.state.data.map((item,index)=>(
                        <a key={index} href={item.link}>
                            <img src={item.img} alt={item.title}/>
                        </a>
                    )):<div>数据加载中...</div>
                }
            </div>
        )
    }
}
