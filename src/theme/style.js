import {MuiThemeProvider} from 'material-ui/styles';
import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui/styles';
import defaultTheme from 'theme/default';
import {connect} from "react-redux";

/**
 * 组件样式配置
 *
 *  1. css
 *  2. 主题提供
 *
 * @see https://github.com/cssinjs/jss
 * @param styles
 * @param options
 * @returns {Function}
 */
export default function style(styles = {}, options = {}) {

    return function (WrappedComponent) {

        class StyleProxy extends PureComponent {

            static Naked = WrappedComponent;

            render() {

                const {themeObj} = this.props;

                return <MuiThemeProvider theme={themeObj}>
                    <WrappedComponent {...this.props} />
                </MuiThemeProvider>
            }
        }

        options.withTheme = true;

        return connect( (state) => ({
            themeObj: state.theme.payload,
        }) )( withStyles(styles, options)(StyleProxy) );

    }

}
