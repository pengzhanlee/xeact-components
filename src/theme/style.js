import {MuiThemeProvider} from 'material-ui/styles';
import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui/styles';
import defaultTheme from 'theme/default';

/**
 * 组件样式配置
 *
 *  1. css
 *  2. 主题提供
 *
 * @param styles
 * @param options
 * @returns {Function}
 */
export default function style(styles = {}, options = {}) {

    return function (WrappedComponent) {

        class StyleProxy extends PureComponent {

            render() {
                return <MuiThemeProvider theme={defaultTheme}>
                    <WrappedComponent {...this.props} />
                </MuiThemeProvider>
            }
        }

        options.withTheme = true;

        return withStyles(styles, options)(StyleProxy);

    }

}
