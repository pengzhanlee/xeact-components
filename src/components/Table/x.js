import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import NativeTable from './index';

/**
 * Table
 * @class
 *
 */
@xeact('table', {})

export default class Table extends PureComponent {

  render() {
    let {type, loading, dense, raised, classes, theme} = this.props;

    return <NativeTable/>;
  }

}
