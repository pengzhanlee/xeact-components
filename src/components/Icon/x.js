import React from "react";
import PropTypes from 'prop-types';
import xeact, {PureComponent, observed} from "xeact";
import NativeIcon from './index';

@xeact('icon')
export default class Icon extends PureComponent {

    static DISPLAY_MODE = 'inline-block';

    static propTypes = {

        @observed
        type: PropTypes.string,
    };

    static defaultProps = {};

    render() {

        const {type} = this.props;

        return <NativeIcon type={type}/>;
    }

}

