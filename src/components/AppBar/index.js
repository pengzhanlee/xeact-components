import React from "react";
import xeact, {PureComponent} from "xeact";
import style from "../../theme/style";
import {default as MAppBar} from 'material-ui/AppBar';

import Toolbar from 'material-ui/Toolbar';

@xeact('app-bar', {
    isContainer: true
})
@style()
export default class AppBar extends PureComponent {

    static propTypes = {
    };

    static defaultProps = {
        position: 'static'
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {position, classes} = this.props;

        return <MAppBar position={position}>
            <Toolbar x-ref="body" />
        </MAppBar>
    }

}
