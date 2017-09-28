import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import {default as MuiButton} from 'material-ui/Button';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {withTheme} from 'material-ui/styles';

const theme = createMuiTheme();

/**
 * Box
 * @class
 *
 */

@withTheme
@xeact('button', {
    isContainer: true
})

export default class Button extends PureComponent {

    static propTypes = {

        @observed
        color: PropTypes.string
    };

    static defaultProps = {
        color: 'primary'
    };


    constructor(props) {
        super(props);
    }

    componentWillUpdate() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillMount() {

    }

    render() {
        let {color} = this.props;

        return <MuiButton raised={true} color={color}>
            <span ref="body"/>
        </MuiButton>
    }

}
