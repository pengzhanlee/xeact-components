import React from "react";
import PropTypes from 'prop-types';
import xeact, {observed, PureComponent} from "xeact";
import style from "../../theme/style";
import {default as MAvatar} from 'material-ui/Avatar';

@xeact('avatar', {
    isContainer: true
})
@style()
export default class Avatar extends PureComponent {

    static propTypes = {

        @observed
        alt: PropTypes.string,

        tag: PropTypes.string,

        // Shadow depth, corresponds to dp in the spec. It's accepting values between 0 and 24 inclusive.
        @observed
        sizes: PropTypes.string,

        // If true, rounded corners are disabled.
        @observed
        src: PropTypes.string,

        @observed
        srcSet: PropTypes.string,

    };

    static defaultProps = {
        tag: 'div',
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {tag, alt, src} = this.props;

        return <MAvatar x-ref="body"
                        component={tag}
                        alt={alt}
                        src={src}

        />
    }

}
