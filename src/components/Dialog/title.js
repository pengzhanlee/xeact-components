import React from "react";
import PropTypes from 'prop-types';
import xeact, {PureComponent} from "xeact";
import {DialogTitle as MDialogTitle} from 'material-ui/Dialog';
import style from "../../theme/style";
import * as ReactDom from "react-dom";

@xeact('dialog-title', {
    isContainer: true
})
@style()
export default class DialogTitle extends PureComponent {

    static propTypes = {

        // If true, the children won't be wrapped by a typography component. For instance, that can be useful to can render an h4 instead of a
        noTag: PropTypes.bool,
    };

    static defaultProps = {
        noTag: false,
    };

    state = {
        open: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {noTag} = this.props;

        return <MDialogTitle
            disableTypography={noTag}>
            <div x-ref="body"/>
        </MDialogTitle>
    }

}
