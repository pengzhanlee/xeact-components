import React from "react";
import PropTypes from 'prop-types';
import xeact, {PureComponent} from "xeact";
import style from "../../theme/style";

@xeact('icon')
@style()
export default class Icon extends PureComponent {

    static DISPLAY_MODE = 'inline';

    static propTypes = {
        name: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
    };

    static defaultProps = {};

    state = {
        icons: null,
        className: '',
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        require.ensure([], () => {
            let MIcon;

            let {name, style, className} = this.props;

            if (name) {
                // support lowercase for first letter
                name = name.replace(/^(\w)(.*)$/, ($0, $1, $2) => {
                    return $1.toUpperCase() + $2;
                });
            }

            try {
                MIcon = require(`material-ui-icons/${name}.js`);
            } catch (e) {
                console.error(
                    `Icon load error: \`${this.props.name}\` not found.
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
        let {size, className, color, theme} = this.props;

        if (theme.palette.hasOwnProperty(color)) {
            color = theme.palette[color][500];
        }

        if (!MIcon) return null;

        return <MIcon color={color} style={{
            width: size,
            height: size,
            color
        }} className={className}/>;
    }

}
