import {configure} from 'xeact';
import store from './store';

// import 'antd/dist/antd.less';
import 'antd/dist/antd.css';

configure({
  store
});

export {default as Button} from './components/Button';

export {default as Col} from './components/Layout/Col';

export {default as Row} from './components/Layout/Row';

export {default as Icon} from './components/Icon';

export {default as Table} from './components/Table';

export {default as Pagination} from './components/Pagination';

export {default as Checkbox} from './components/Checkbox';

export {default as message} from './components/Message';

export {default as Modal} from './components/Modal';

export {default as Select} from './components/Select';

