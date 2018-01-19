import React from "react";
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed, PureComponent, XeactDOM} from "xeact";
import {Col as AntCol} from 'antd';

@xeact('col', {
    isContainer: true,
    raiseClassName: true,
})
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

    constructor(props) {
        super(props);
    }

    /**
     * 根据 row 的 gutter 设置 padding
     */
    setPadding() {
        const col = ReactDom.findDOMNode(this);
        const parent = XeactDOM.getParent(this).container;

        if(parent) {
            Object.assign(col.style, {
                paddingLeft: `${Math.abs(parseInt(parent.style.marginLeft, 10))}px`,
                paddingRight: `${Math.abs(parseInt(parent.style.marginRight, 10))}px`,
            });
        }
    }

    componentDidMount() {
        this.setPadding();
    }

    componentDidUpdate() {
        this.setPadding();
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
