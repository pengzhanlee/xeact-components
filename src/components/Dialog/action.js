import React from "react";
import xeact, {PureComponent} from "xeact";
import {DialogActions} from 'material-ui/Dialog';
import style from "../../theme/style";
import * as ReactDom from "react-dom";

@xeact('dialog-action', {
    isContainer: true
})
@style()
export default class DialogAction extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        return <DialogActions
            x-ref="body"
        />
    }

}
