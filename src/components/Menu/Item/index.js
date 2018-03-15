import React from "react";
import xeact, {PureComponent, XeactDOM} from "xeact";
import {Menu as AntMenu} from 'antd';

// TODO: not work
@xeact('menu-item', {
    isContainer: true,
})
export default class MenuItem extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        let {className, style} = this.props;

        return <AntMenu.Item
            x-ref="body"
        />
    }

}
