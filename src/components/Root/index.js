import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect, Provider} from "react-redux";
import xeact, {dispatchEvent, observed} from "xeact";
import store from "../../store";
import ModalTip from '../ModalTip';
import {HIDE_MODAL} from "../../redux/modules/common/reducer";

@xeact('root', {
    isContainer: true
})
@connect(
    state => ({
        modal: state.modal,
    }))
export default class Root extends PureComponent {

    componentDidMount() {
    }

    render() {

        let {modal, dispatch} = this.props;

        return <Provider store={store}>
            <div>
                <div x-ref="body"/>

                <ModalTip
                    {...modal.payload}
                    show={modal.payload.show || false}
                    onRequestDismiss={() => {
                        dispatch({
                            type: HIDE_MODAL
                        });
                    }}
                />
            </div>
        </Provider>
    }
}
