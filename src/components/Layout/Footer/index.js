import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import {Layout} from 'antd';

@xeact('footer', {
    isContainer: true,
    raiseClassName: true,
})
export default class Footer extends PureComponent {

    static propTypes = {


    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        let {align, gutter, justify} = this.props;

        return <Layout.Footer
            x-ref="body"
        />
    }

}
