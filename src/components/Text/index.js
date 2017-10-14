import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import Typography from 'material-ui/Typography';
import style from "../../theme/style";

@xeact('text', {
    isContainer: true
})
@style()
export default class Row extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {


    };

    constructor(props) {
        super(props);
    }

    render() {
        let {spacing, align, justify} = this.props;

        return <Typography
            x-ref="body"
        />
    }

}
