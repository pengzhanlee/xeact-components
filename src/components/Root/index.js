import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect, Provider} from "react-redux";
import xeact, {observed} from "xeact";
import {MuiThemeProvider} from 'material-ui/styles';
import store from "../../store";
import ModalTip from '../ModalTip';
import {HIDE_MODAL, SWITCH_THEME} from "../../redux/modules/common/reducer";
import {configInitTheme, getInitTheme, getTheme} from "../../theme/default";

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

    /**
     * 切换 theme
     */
    switchTheme() {
        const {dispatch, theme} = this.props;

        dispatch({
            type: SWITCH_THEME,
            payload: theme
        });
    }

    componentWillMount() {
        const {theme} = this.props;
        // 初始化 theme
        configInitTheme(theme);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.theme !== this.props.theme) {
            // theme switch from attribute(prop)
            this.switchTheme();
        }
    }

    componentDidMount() {
    }

    render() {

        let {modal, dispatch, themeObj, theme} = this.props;

        themeObj = themeObj || getInitTheme();

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
