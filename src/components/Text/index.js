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
        tag: PropTypes.string,
        color: PropTypes.string,
        type: PropTypes.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button']),
    };

    static defaultProps = {
        tag: 'p',
        color: 'inherit',
        type: 'body1',
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {tag, color, type} = this.props;

        return <Typography
            x-ref="body"

            component={tag}
            color={color}
            type={type}
        />
    }

}
