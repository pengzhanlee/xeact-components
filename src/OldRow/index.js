import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import xeact from 'xeact';

/**
 * Row
 * @class
 *
 */

@xeact('old-row', {
    isContainer: true
})
export default class OldRow extends PureComponent {

    static propTypes = {
        title: PropTypes.string
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {

        return <div>
            <h4>Row-{this.props.title || 'title'}</h4>
            <div className="row">
                <div className="col-xs-12" ref="body"/>
            </div>
        </div>
    }

}
