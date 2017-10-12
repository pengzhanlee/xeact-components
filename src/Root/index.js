import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";

@xeact('root', {
    isContainer: true
})
export default class Root extends PureComponent {

    render() {

        return [
            <div x-ref="body" key="1"/>,
            <div key="2">sss</div>
        ]
    }
}
