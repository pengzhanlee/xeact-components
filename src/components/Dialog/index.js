import React from "react";
import ReactDom from "react-dom";
import autoBind from 'autobind-decorator';
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, exposed, observed, PureComponent} from "xeact";
import {default as MDialog} from 'material-ui/Dialog';
import style from "../../theme/style";

@xeact('dialog', {
    isContainer: true
})
@style()
export default class Dialog extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    state = {
        open: false
    };

    constructor(props) {
        super(props);
    }

    @exposed
    open() {
        this.setState({
            open: true
        });
    }

    @exposed
    close() {
        this.setState({
            open: false
        });
    }

    @autoBind
    onRequestClose() {
        this.close();
    }

    componentWillMount() {
        this.__childFragment = this.props.children;
    }

    componentWillUpdate(nextProps, nextState) {
        const {open} = nextState;

        // State `open` changed to `false`.
        if ((this.state.open !== open) && !open) {
            const dialog = ReactDom.findDOMNode(this.refs.dialog);
            const body = dialog.querySelector('[x-ref=body]');

            let fragment = document.createDocumentFragment();
            while (body.childNodes.length) {
                let node = body.childNodes[0];
                fragment.appendChild(node);
            }

            this.__childFragment = fragment;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {open} = this.state;

        // State `open` changed to `true`.
        if ((prevState.open !== open) && open) {
            const dialog = ReactDom.findDOMNode(this.refs.dialog);
            const body = dialog.querySelector('[x-ref=body]');
            body.appendChild(this.__childFragment);
        }
    }

    @exposed
    queryNode(selector) {
        return this.__childFragment.querySelector(selector);
    }

    @exposed
    queryNodes(selector) {
        return this.__childFragment.querySelectorAll(selector);
    }

    render() {
        const {spacing, align, justify} = this.props;
        const {open} = this.state;

        return <MDialog
            ref="dialog"
            open={open}
            onRequestClose={this.onRequestClose}
        >
            <div x-ref="body"/>
        </MDialog>
    }

}
