import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import {CardContent as MCardContent} from 'material-ui/Card';

@xeact('card-content', {
    isContainer: true
})
export default class CardContent extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {

        return <MCardContent
            x-ref="body"
        />
    }

}
