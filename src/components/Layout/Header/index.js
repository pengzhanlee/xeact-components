import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import {Layout} from 'antd';

@xeact('header', {
    isContainer: true
})
export default class Row extends PureComponent {

    static propTypes = {


    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        let {align, gutter, justify} = this.props;

        return <Layout.Header
            x-ref="body"
        />
    }

}
