import {configure} from 'xeact';
import store from './store';

// import 'antd/dist/antd.less';
import 'antd/dist/antd.css';

configure({
    store
});

export {default as Button} from './components/Button';
