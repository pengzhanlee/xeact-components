import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import {Layout} from 'antd';

@xeact('content', {
    isContainer: true
})
export default class Content extends PureComponent {

    static propTypes = {


    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        let {align, gutter, justify} = this.props;

        return <Layout.Content
            x-ref="body"
        />
    }

}
