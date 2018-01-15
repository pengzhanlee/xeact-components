import React from "react";
import PropTypes from 'prop-types';
import xeact, {PureComponent, observed} from "xeact";
import {Icon as AntIcon} from 'antd';

@xeact('icon')
export default class Icon extends PureComponent {

    static DISPLAY_MODE = 'flex';

    static propTypes = {

        @observed
        type: PropTypes.string,
    };

    static defaultProps = {

    };

    render() {

        const {type} = this.props;

        return <AntIcon type={type} />;
    }

}
