import React from "react";
import PropTypes from 'prop-types';
import xeact, {PureComponent} from "xeact";
import style from "../../theme/style";
// import * as Icons from 'material-ui-icons';

@xeact('icon')
@style()
export default class Icon extends PureComponent {

    static propTypes = {
        name: PropTypes.string
    };

    static defaultProps = {};

    state = {
        icons: null
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        require.ensure([], () => {
            let MIcon;

            let {name} = this.props;

            if(name) {
                // support lowercase for first letter
                name = name.replace(/^(\w)(.*)$/, ($0, $1, $2) => {
                    return $1.toUpperCase() + $2;
                });
            }

            try {
                MIcon = require(`material-ui-icons/${name}.js`);
            } catch (e) {
                console.error(
                    `Icon load error: '${this.props.name}' not found.
Please make sure you provided a valid icon name.
Visit https://material.io/icons to checkout supported icon list.`
                );
            }

            if (MIcon) {
                this.setState({
                    icons: MIcon.default
                });
            }
        });
    }


    render() {
        let {icons: MIcon} = this.state;
        if (!MIcon) return null;

        return <MIcon/>;
    }

}
