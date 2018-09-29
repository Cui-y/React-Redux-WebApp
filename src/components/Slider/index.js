import React,{Component} from 'react';
import './index.less'
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom';
export default class Slider extends Component{

    constructor(){
        super();
        this.state = {index:0}
    }


    render(){
        let opts = {continuous: false,callback:(index)=>{
            this.setState({
                index
            })
        }};
        return (
            <div className="slider">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-shuma"></i>
                                    <p>数码</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-yulebao"></i>
                                    <p>娱乐宝</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-suishendai"></i>
                                    <p>随身贷</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-kuaiqiang"></i>
                                    <p>快抢</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-zhaocaibao"></i>
                                    <p>招财宝</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-chengshifuwu"></i>
                                    <p>城市服务</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-aixinjuanzeng"></i>
                                    <p>爱心捐赠</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-guojihuikuan"></i>
                                    <p>国际汇款</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-kuaidi"></i>
                                    <p>快递</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-jipiao"></i>
                                    <p>机票</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-caipiao"></i>
                                    <p>彩票</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-shuidianmei"></i>
                                    <p>水电煤</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-youxichongzhi"></i>
                                    <p>游戏充值</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-gupiao"></i>
                                    <p>股票</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-shoujichongzhi"></i>
                                    <p>手机充值</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-jiaoyujiaofei"></i>
                                    <p>学习培训</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-aliyouxi"></i>
                                    <p>阿里游戏</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-fushi"></i>
                                    <p>家装</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-jiaoyujiaofei"></i>
                                    <p>教育缴费</p>
                                </li>
                            </Link>
                            <Link to='/search/food'>
                                <li>
                                    <i className="iconfont icon-huiyuantequan"></i>
                                    <p>会员特权</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={0 === this.state.index?'active':''}></li>
                    <li className={1 === this.state.index?'active':''}></li>
                </ul>
            </div>
        )
    }
}
