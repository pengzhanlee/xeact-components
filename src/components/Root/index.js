import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect, Provider} from "react-redux";
import xeact, {dispatchEvent, observed} from "xeact";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import Button from 'material-ui/Button';
import store from "../../store";
import ModalTip from '../ModalTip';
import {HIDE_MODAL} from "../../redux/modules/common/reducer";
import defaultTheme from 'theme/default';


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
            <MuiThemeProvider theme={defaultTheme}>
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
            </MuiThemeProvider>
        </Provider>
    }
}
