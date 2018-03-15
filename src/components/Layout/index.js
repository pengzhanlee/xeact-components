import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent, XeactDOM} from "xeact";
import {Layout as AntLayout} from 'antd';
import * as ReactDOM from "react-dom";
import Sidebar from "./Sidebar";

const tagName = 'layout';

@xeact(tagName, {
    isContainer: true,
})
export default class Layout extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        if(XeactDOM.hasChildOfTag(this, Sidebar.tagName)) {
            dom.classList.add('ant-layout-has-sider');
        }
    }

    render() {
        let {className, style} = this.props;

        return <AntLayout
            x-ref="body"
        />
    }

}
