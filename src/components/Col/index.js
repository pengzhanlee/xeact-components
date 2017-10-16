import React from "react";
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed, PureComponent} from "xeact";
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

    movedClass = new Set();

    constructor(props) {
        super(props);
    }

    /**
     * 由于 material-ui 使用子代选择器
     * 需要将 class 移动到父元素
     */
    moveClass() {
        const col = ReactDom.findDOMNode(this);
        const colClassName = col.className.split(' ');
        const parentNode = col.parentNode;

        for(let className of this.movedClass) {
            parentNode.classList.remove(className);
        }

        for (let className of colClassName) {
            parentNode.classList.add(className);
            this.movedClass.add(className);
            col.classList.remove(className);
        }
    }

    componentDidMount() {
        this.moveClass();
    }

    componentDidUpdate() {
        this.moveClass();
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
