import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import NativeTabs from './index';

/**
 * Table
 * @class
 *
 */
@xeact('tabs', {})

export default class Tabs extends PureComponent {

  render() {
    let {type, loading, dense, raised, classes, theme} = this.props;

    return <NativeTabs x-ref="body" />;
  }

}
