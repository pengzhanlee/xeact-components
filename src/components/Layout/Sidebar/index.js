import React from "react";
import xeact, {PureComponent} from "xeact";
import {Layout} from 'antd';
import Icon from "../../Icon";


@xeact('sidebar', {
    isContainer: true,
    raiseClassName: false,
})
export default class Sidebar extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        let {align, gutter, justify} = this.props;

        return <Layout.Sider
            breakpoint={'sm'}
        >
            <div x-ref="body" />
        </Layout.Sider>
    }

}
