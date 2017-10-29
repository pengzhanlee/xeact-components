import React from "react";
import xeact, {PureComponent} from "xeact";
import {DialogContent as MDialogContent} from 'material-ui/Dialog';
import style from "../../theme/style";
import * as ReactDom from "react-dom";

@xeact('dialog-content', {
    isContainer: true
})
@style()
export default class DialogContent extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        return <MDialogContent
            x-ref="body"
        />
    }

}
