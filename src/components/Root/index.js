import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";

@xeact('root', {
  isContainer: true
})
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

  }

  componentWillMount() {
    const {theme} = this.props;
    // 初始化 theme
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

    let {modal, dispatch} = this.props;

    return <div>
      <div x-ref="body"/>
    </div>
  }
}
