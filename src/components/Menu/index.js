import React from "react";
import xeact, {PureComponent, XeactDOM} from "xeact";
import {default as AntMenu} from 'antd/es/menu';

// TODO: not work
@xeact('menu', {
    isContainer: true,
})
export default class Menu extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        let {className, style} = this.props;

        return <AntMenu x-ref="body" />
    }

}
