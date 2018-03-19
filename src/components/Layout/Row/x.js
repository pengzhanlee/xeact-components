import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import NativeRow from './index';

@xeact('row', {
    isContainer: true
})
export default class Row extends PureComponent {

    static propTypes = {

        @observed
        align: PropTypes.string,
        // spacing: PropTypes.oneOf([0, 8, 16, 24, 40]),

        @observed
        gutter: PropTypes.number,

        @observed
        justify: PropTypes.string,

    };

    static defaultProps = {

        spacings: 16

    };

    constructor(props) {
        super(props);
    }

    render() {
        let {align, gutter, justify} = this.props;

        return <NativeRow
            x-ref="body"
            align={align}
            gutter={gutter}
            justify={justify}
            type={'flex'}
        />
    }

}
