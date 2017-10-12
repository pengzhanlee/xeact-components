import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import {CardHeader as MCardHeader} from 'material-ui/Card';

@xeact('card-header', {
    isContainer: true
})
export default class CardHeader extends PureComponent {

    static propTypes = {

        @observed
        title: PropTypes.string,

        @observed
        subheader: PropTypes.string

    };

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {

        let {title, subheader} = this.props;

        return <MCardHeader
            x-ref="body"
            title={title}
            subheader={subheader}
        />
    }

}
