import React, {Component} from 'react';
import './index.less'
export default class LoadMore extends Component {

    //组件加载完成之后绑定事件
    componentDidMount() {
        clearInterval(this.timer);
        this.more = () => {
            clearInterval(this.timer);
            this.timer = setTimeout(() => {  //使用一个定时器,节流操作
                //先判断正在加载
                if (this.props.isLoading) {
                    return;
                }
                //判断该元素距离顶端 和  屏幕一屏的高度
                let screenHeight = window.screen.height;
                let Top = this.refs.more.getBoundingClientRect().top;  //获取加载更多字段距离屏幕顶端的距离
                if (Top < screenHeight) {
                    this.props.loadMore();
                }
            }, 30)
        };
        window.addEventListener('scroll', this.more)
    }

    //组件移除之后解除绑定
    componentWillUnmount() {
        window.removeEventListener('scroll', this.more)
    }

    render() {
        return (
            <div className="load-more">
                {this.props.hasMore ? <div ref="more">加载更多...</div> : <div>我是有底线的!</div>}
            </div>

        )
    }
}
