import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import NativeTabs from './index';

const NativeTabPanel = NativeTabs.TabPane;

/**
 * Table
 * @class
 *
 */
@xeact('tab-pane', {})

export default class TabPanel extends PureComponent {

  render() {
    let {type, loading, dense, raised, classes, theme} = this.props;

    return <NativeTabPanel x-ref="body"/>;
  }

}
