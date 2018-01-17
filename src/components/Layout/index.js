import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import {Layout as AntLayout} from 'antd';

@xeact('layout', {
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
        let {className, style} = this.props;

        return <AntLayout
            x-ref="body"
        />
    }

}
