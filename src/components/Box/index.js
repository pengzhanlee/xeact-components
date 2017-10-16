import React from "react";
import PropTypes from 'prop-types';
import xeact, {dispatchEvent, observed, PureComponent} from "xeact";

/**
 * Box
 * @class
 *
 */

@xeact('box', {
    isContainer: true
})
export default
class Box extends PureComponent {

    static propTypes = {

        @observed
        header: PropTypes.string,

        @observed
        cc: PropTypes.bool,

        bb: PropTypes.array

    };

    static defaultProps = {
        header: ''
    };

    // static observedAttributes = ['header'];

    constructor(props) {
        super(props);

        this.titleClick = this.titleClick.bind(this);
    }

    componentWillUpdate() {
        // console.log(22);
        // ReactDOM.findDOMNode(this.refs.body).appendChild(this.props.children);
    }

    componentDidMount() {
        let {children} = this.props;



        // while (children.childNodes.length) {
        //     ReactDOM.findDOMNode(this.refs.body).appendChild(children.childNodes[0]);
        // }


        // let e = document.createElement('div');
        // e.appendChild(children);
        // e.innerHTML = '<div>gasdf</div>';
// console.log(e)


//         ReactDOM.findDOMNode(this.refs.body).innerHTML = '<admin-loading></admin-loading>';

        // document.body.appendChild(children);

        // if(children) {
        //     ReactDOM.findDOMNode(this.refs.body).appendChild(children);
        // }

        // setTimeout(() => {
        //     console.log(11);
        //     this.setState({
        //         a: Math.random()
        //     });
        // }, 3e3)


        // ReactDOM.findDOMNode(this).addEventListener('change', (a, b, c) => {
        //     console.log('change', a, b, c);
        // });
    }

    componentWillUnmount() {
    }

    componentWillMount() {

    }

    titleClick() {

        dispatchEvent(this, 'titleClick' , {
            header: this.props.header
        });

    }

    render() {
        let {header} = this.props;

        return <div className="box">
            {header &&
            <div className="box-header" onClick={this.titleClick}>{header}</div>
            }
            <div className="box-body" x-ref="body" />
        </div>
    }

}
