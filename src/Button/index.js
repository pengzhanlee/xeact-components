import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {observed} from "xeact";
import {default as MuiButton} from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';

const styles = {
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    },
};

/**
 * Button
 * @class
 *
 */
@xeact('button', {
    isContainer: true
})

@withStyles(styles)

export default class Button extends PureComponent {

    static propTypes = {

        @observed
        color: PropTypes.string,

        classes: PropTypes.object
    };

    static defaultProps = {
        color: 'primary',
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
        let {color, classes} = this.props;

        return <MuiButton raised={true} color={color} className={classes.button} >
            <span x-ref="body" />
        </MuiButton>
    }

}
