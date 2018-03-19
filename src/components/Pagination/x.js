import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import NativePagination from './index';

/**
 * Table
 * @class
 *
 */
@xeact('pagination', {})

export default class Pagination extends PureComponent {

  render() {
    let {type, loading, dense, raised, classes, theme} = this.props;

    return <NativePagination/>;
  }

}
