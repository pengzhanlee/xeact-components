import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import {default as MuiButton} from 'material-ui/Button';
import style from 'theme/style';
import {connect} from "react-redux";

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

@connect(
    state => ({
        modal: state.modal,
    }))

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

    componentWillReceiveProps(nextProps) {
    }

    render() {
        let {color, dense, raised, classes, theme} = this.props;

        return <MuiButton dense={dense} raised={raised} color={color} className={classes.button}>
            <span x-ref="body"/>
        </MuiButton>
    }

}
