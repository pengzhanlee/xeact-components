import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import Grid from 'material-ui/Grid';

const spacings = [0, 8, 16, 24, 40];

@xeact('row', {
    isContainer: true
})
export default class Row extends PureComponent {

    static propTypes = {


        spacing: PropTypes.oneOf(spacings),

    };

    static defaultProps = {

        spacings: 16

    };

    constructor(props) {
        super(props);
    }

    render() {
        let {spacing} = this.props;

        return <Grid container ref="body"
                     spacing={spacing}
        />
    }

}
