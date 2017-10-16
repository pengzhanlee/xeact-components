import React from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, exposed, observed, PureComponent} from "xeact";
import Typography from 'material-ui/Typography';

import {withStyles} from 'material-ui/styles';
import style from "../../theme/style";

@xeact('text', {
    isContainer: true
})

@style({})
export default class Text extends PureComponent {

    static propTypes = {

        @observed
        color: PropTypes.string
    };

    static defaultProps = {

        color: 'accent'

    };

    @exposed
    getXXX() {
        return this.props.color;
    }

    @exposed
    get yyy() {
        return this.props.color;
    }

    constructor(props) {
        super(props);
    }

    render() {
        let {color} = this.props;

        return <Typography
            x-ref="body"
            color={color}
        />
    }

}
