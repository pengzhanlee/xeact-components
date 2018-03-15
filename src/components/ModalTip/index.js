import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {HIDE_MODAL} from "../../redux/modules/common/reducer";


@connect(
    state => ({
    }))
export default
class ModalEasyTip extends PureComponent {

    static LOADING = 'loading';
    static ERROR = 'error';
    static SUCCESS = 'success';

    static propTypes = {
        type: PropTypes.oneOf(['loading', 'error', 'success', 'image', 'element', '']),
        text: PropTypes.string,
        image: PropTypes.element,
        element: PropTypes.element,
        show: PropTypes.bool.isRequired,

        timer: PropTypes.number,
        dismissOnMaskClicked: PropTypes.bool,
        onRequestDismiss: PropTypes.func,
    };

    static defaultProps = {
        dismissOnMaskClicked: false,
        onRequestDismiss: () => {
        }
    };

    constructor(props) {
        super(props);
        this.tryCloseOnModal = this.tryCloseOnModal.bind(this);
    }

    tryCloseOnModal() {
        const {type, onRequestDismiss} = this.props;
        if (type !== 'loading') {
            onRequestDismiss();
        }
    }


    componentWillReceiveProps(nextProps) {
        const {onRequestDismiss} = this.props;
        const {timer} = nextProps;
        if (!isNaN(timer)) {
            if (timer > 0) {
                setTimeout(() => {
                    onRequestDismiss();
                }, timer);

            }
        }
    }

    render() {

        const styles = require('./style.scss');
        const {type, text, show, image, element} = this.props;

        if(!show){
            return null;
        }

        return (
            <div className={`${styles.modal} ${styles.mask} ${show ? styles.show : styles.dismiss}`} onClick={this.tryCloseOnModal}>
                <div className={`${styles.modalMain}`}>
                    {type === 'loading' &&
                    <div className={`${styles.icon} ${styles.loading} ${!text ? styles.loadingOnly : ''}`}>
                        <div className={`sk-child sk-double-bounce1`} />
                        <div className={`sk-child sk-double-bounce2`} />
                    </div>
                    }
                    {type === 'error' &&
                    <div className={`${styles.icon} ${styles.error}`} />
                    }
                    {type === 'success' &&
                    <div className={`${styles.icon} ${styles.success}`} />
                    }
                    {type === 'image' && image &&
                    <div className={`${styles.image}`}>
                        {image}
                    </div>
                    }
                    {type === 'element' &&
                    element
                    }
                    {type === ''}
                    {text &&
                    <p>{text}</p>
                    }
                </div>
            </div>
        )
    }

}
