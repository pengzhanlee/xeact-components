import React, {PureComponent} from "react";
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed} from "xeact";
import Grid from 'material-ui/Grid';
import style from "../../theme/style";

const cols = Array.from(new Array(12).keys(), (x) => x + 1);
const colsPropTypes = PropTypes.oneOf(cols);

@xeact('col', {
    isContainer: true
})
@style()
export default class Col extends PureComponent {

    static propTypes = {

        // @observed
        xs: colsPropTypes,

        // @observed
        sm: colsPropTypes,

        // @observed
        md: colsPropTypes,

        // @observed
        lg: colsPropTypes,

        // @observed
        xl: colsPropTypes,
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let col = ReactDom.findDOMNode(this);
        let colClassName = col.className.split(' ');

        for (let className of colClassName) {
            col.parentNode.classList.add(className);
            col.classList.remove(className);
        }
    }

    render() {
        let {xs, sm, md, lg, xl} = this.props;

        return <Grid
            x-ref="body"
            item
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
        />
    }

}
