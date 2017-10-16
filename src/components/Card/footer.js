import React from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed, PureComponent} from "xeact";
import {CardActions as CardActions} from 'material-ui/Card';
import style from "../../theme/style";

const styles = {
    container: {
        justifyContent: 'flex-end'
    },
};

@xeact('card-footer', {
    isContainer: true
})

@style(styles)
export default class CardFooter extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {

        let {title, subheader, classes} = this.props;

        return <CardActions
            className={classes.container}
            x-ref="body"
        />
    }

}
