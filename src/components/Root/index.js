import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect, Provider} from "react-redux";
import xeact, {observed} from "xeact";
import {MuiThemeProvider} from 'material-ui/styles';
import store from "../../store";
import ModalTip from '../ModalTip';
import {HIDE_MODAL, SWITCH_THEME} from "../../redux/modules/common/reducer";
import {getTheme} from "../../theme/default";

@xeact('root', {
    isContainer: true
})

@connect(
    state => ({
        modal: state.modal,
        themeObj: state.theme.payload,
    }))

export default class Root extends PureComponent {

    static propTypes = {

        @observed
        theme: PropTypes.oneOf(['light', 'dark']),
    };

    static defaultProps = {
        theme: 'light',
    };

    constructor(...args) {
        super(...args);

        // this.switchTheme();
    }

    switchTheme() {
        const {dispatch, theme} = this.props;

        dispatch({
            type: SWITCH_THEME,
            payload: theme
        });
    }

    componentWillMount() {
        // this.switchTheme();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.theme !== this.props.theme) {
            this.switchTheme();
        }
    }

    componentDidMount() {
    }

    render() {

        let {modal, dispatch, themeObj, theme} = this.props;

        // if(!themeObj) {
        //     themeObj = getTheme(theme);
        // }

        return <Provider store={store}>
            <MuiThemeProvider theme={themeObj}>
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
