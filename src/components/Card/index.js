import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import {default as MCard} from 'material-ui/Card';

import './header';
import './content';
import './media';
import './footer';

@xeact('card', {
    isContainer: true
})
export default class Card extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);
    }

    render() {

        return <MCard
            x-ref="body"
        />
    }

}
