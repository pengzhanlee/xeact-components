import React from "react";
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed, PureComponent} from "xeact";
import Grid from 'material-ui/Grid';
import style from "../../theme/style";
import {Col as AntCol} from 'antd';

const cols = Array.from(new Array(12).keys(), (x) => x + 1);
const colsPropTypes = PropTypes.oneOf(cols);

@xeact('col', {
    isContainer: true
})
@style()
export default class Col extends PureComponent {

    static propTypes = {

        // @observed
        xs: PropTypes.number,

        // @observed
        sm: PropTypes.number,

        // @observed
        md: PropTypes.number,

        // @observed
        lg: PropTypes.number,

        // @observed
        xl: PropTypes.number,

        span: PropTypes.number,
    };

    static defaultProps = {};

    movedClass = new Set();

    constructor(props) {
        super(props);
    }

    /**
     * flex 布局需要将 class 移动到父元素
     */
    moveClass() {
        const col = ReactDom.findDOMNode(this);
        const colClassName = col.className.split(' ');
        const parentNode = col.parentNode;

        for (let className of this.movedClass) {
            parentNode.classList.remove(className);
        }

        for (let className of colClassName) {
            parentNode.classList.add(className);
            this.movedClass.add(className);
            col.classList.remove(className);
        }

        // 根据 row 的 gutter 设置 padding
        Object.assign(col.style, {
            paddingLeft: `${Math.abs(parseInt(parentNode.parentNode.style.marginLeft, 10))}px`,
            paddingRight: `${Math.abs(parseInt(parentNode.parentNode.style.marginRight, 10))}px`,
        });
    }

    componentDidMount() {
        this.moveClass();
    }

    componentDidUpdate() {
        this.moveClass();
    }

    render() {
        let {xs, sm, md, lg, xl, span} = this.props;

        return <AntCol
            x-ref="body"
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            span={span}
        />
    }

}
