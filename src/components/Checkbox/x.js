import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import NativeCheckbox from './index';

/**
 * Checkbox
 * @class
 *
 */
@xeact('checkbox', {})

export default class Pagination extends PureComponent {

  render() {
    let {type, loading, dense, raised, classes, theme} = this.props;

    return <NativeCheckbox/>;
  }

}
