import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import {button as AntButton} from 'antd';
import style from 'theme/style';
import {connect} from "react-redux";

/**
 * Button
 * @class
 *
 */
@xeact('button', {
    isContainer: true
})

export default class Button extends PureComponent {

    static propTypes = {

        @observed
        type: PropTypes.string,

        @observed
        loading: PropTypes.bool,


        @observed
        dense: PropTypes.bool,

        @observed
        raised: PropTypes.bool,

        classes: PropTypes.object
    };

    static defaultProps = {
        dense: false,
        raised: true,
    };


    constructor(props) {
        super(props);
    }

    render() {
        let {type, loading, dense, raised, classes, theme} = this.props;

        return <AntButton type={type} loading={loading}>
            <span x-ref="body" />
        </AntButton>;
    }

}
