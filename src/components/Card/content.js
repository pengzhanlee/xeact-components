import React from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed, PureComponent} from "xeact";
import {CardContent as MCardContent} from 'material-ui/Card';
import {connect} from "react-redux";
import {SHOW_MODAL} from "../../redux/modules/common/reducer";
import style from 'theme/style';

@xeact('card-content', {
    isContainer: true
})
@style()
@connect(
    state => ({
    }))
export default class CardContent extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    componentDidMount() {
        this.props.dispatch({
            type: SHOW_MODAL,
            payload: {
                type: 'success',
                text: 'haha',
                timer: 1e3
            }
        });
    }

    constructor(props) {
        super(props);
    }

    render() {

        return <MCardContent
            x-ref="body"
        />
    }

}
