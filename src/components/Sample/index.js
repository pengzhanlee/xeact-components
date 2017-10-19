import React from "react";
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import xeact, {dispatchEvent, exposed, observed, PureComponent} from "xeact";
import Typography from 'material-ui/Typography';
import style from "../../theme/style";

// 声明组件对应的标签名 'sample' (x-sample)
// 且是容器类组件
@xeact('sample', {
    isContainer: true
})

// 定义样式, 参数可以 object 或 function
// 若传递 function， 则参数 theme 中包含了主题信息，
// 如果有必要，可以从主题信息中获取具体样式的值
@style((theme) => ({
    trigger: {
        color: 'red',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary[400]
        }
    }
}))

/**
 * 这是一个演示组件
 */
export default class Sample extends PureComponent {

    static propTypes = {

        // 观察一个属性变化
        @observed
        say: PropTypes.string

    };

    static defaultProps = {
        say: `I'm Sample Component.`
    };

    state = {
        greetTimes: 0,
        started: false,
        indicator: ''
    };

    // 向 dom 暴露一个 setter 方法
    @exposed
    set indicator(indicator) {
        this.setState({
            indicator
        });
    }

    // 向 dom 暴露一个 getter 方法
    @exposed
    get indicator() {
        return this.state.indicator;
    }

    // 向 dom 暴露一个 普通 方法
    @exposed
    getIndicator() {
        return this.state.indicator;
    }


    @autobind
    start() {

        if (this.state.started) return;

        this.setState({
            started: true
        });

        setInterval(() => {
            const {greetTimes} = this.state;

            this.setState({
                greetTimes: greetTimes + 1,
            });

            // 向 dom 发送事件 'greeting'， 并携带相关数据
            dispatchEvent(this, 'greeting', {
                greetTimes: greetTimes + 1
            });
        }, 1e3);
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {say, classes} = this.props;
        const {greetTimes, indicator} = this.state;

        return <div>
            <h2 x-ref="body"/>
            <Typography onClick={this.start} className={classes.trigger}>点击我开始和你打招呼 ({indicator})</Typography>
            {
                Array(greetTimes).fill().map((i, index) =>
                    <Typography key={index}>{say}...{greetTimes - index}</Typography>
                )
            }
        </div>
    }

}
