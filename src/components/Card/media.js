import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import {CardMedia as MCardMedia} from 'material-ui/Card';

@xeact('card-media', {})
export default class CardMedia extends PureComponent {

    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {

        const {title, image} = this.props;

        return <MCardMedia
            title={title}
            image={image}
        />
    }

}
