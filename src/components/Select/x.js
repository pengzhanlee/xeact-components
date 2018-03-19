import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import NativeSelect from './index';

/**
 * Table
 * @class
 *
 */
@xeact('select', {})

export default class Select extends PureComponent {

  render() {
    let {type, loading, dense, raised, classes, theme} = this.props;

    return <NativeSelect/>;
  }

}
