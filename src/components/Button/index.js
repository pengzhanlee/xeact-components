import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {observed} from "xeact";
import {default as MuiButton} from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import defaultTheme from 'theme/default';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import style from 'theme/style';

const styles = {
    button: {},
};

/**
 * Button
 * @class
 *
 */
@xeact('button', {
    isContainer: true
})

@style(styles)

export default class Button extends PureComponent {

    static propTypes = {

        @observed
        color: PropTypes.string,

        @observed
        dense: PropTypes.bool,

        @observed
        raised: PropTypes.bool,

        classes: PropTypes.object
    };

    static defaultProps = {
        color: 'primary',
        dense: false,
        raised: true,
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
        let {color, dense, raised, classes, theme} = this.props;

        console.log(classes, theme);

        return <MuiButton dense={dense} raised={raised} color={color} className={classes.button}>
            <span x-ref="body"/>
        </MuiButton>
    }

}
