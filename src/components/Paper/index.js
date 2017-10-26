import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import style from "../../theme/style";
import {default as MPaper} from 'material-ui/Paper';

import Toolbar from 'material-ui/Toolbar';

@xeact('paper', {
    isContainer: true
})
@style()
export default class Paper extends PureComponent {

    static propTypes = {

        tag: PropTypes.string,

        // Shadow depth, corresponds to dp in the spec. It's accepting values between 0 and 24 inclusive.
        @observed
        elevation: PropTypes.number,

        // If true, rounded corners are disabled.
        @observed
        square: PropTypes.bool,

    };

    static defaultProps = {
        tag: 'div',

        elevation: 2,

        square: false,
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {tag, elevation, square} = this.props;

        return <MPaper x-ref="body" component={tag} elevation={elevation} square={square} />
    }

}
