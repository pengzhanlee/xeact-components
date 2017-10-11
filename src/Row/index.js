import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import Grid from 'material-ui/Grid';

const {Naked: {propTypes: GridPropTypes}} = Grid;

@xeact('row', {
    isContainer: true
})
export default class Row extends PureComponent {

    static propTypes = {

        @observed
        spacing: GridPropTypes.spacing,
        // spacing: PropTypes.oneOf([0, 8, 16, 24, 40]),

        @observed
        align: GridPropTypes.align,

        @observed
        justify: GridPropTypes.justify,

    };

    static defaultProps = {

        spacings: 16

    };

    constructor(props) {
        super(props);
    }

    render() {
        let {spacing, align, justify} = this.props;

        return <Grid
            x-ref="body"
            container
            spacing={spacing}
            align={align}
            justify={justify}
        />
    }

}
