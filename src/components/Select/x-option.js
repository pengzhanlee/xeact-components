import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import NativeSelect from './index';

/**
 * Table
 * @class
 *
 */
@xeact('option', {})

export default class Option extends PureComponent {

  render() {
    let {type, loading, dense, raised, classes, theme} = this.props;

    return <NativeSelect.Option/>;
  }

}
