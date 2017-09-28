import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import Grid from 'material-ui/Grid';

@xeact('row', {
    isContainer: true
})
export default class Row extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        let {header} = this.props;

        return <Grid container ref="body"  />
    }

}
