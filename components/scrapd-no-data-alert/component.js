import { Alert } from 'antd';

const ScrdapdNoDataAlert = ({ count }) =>
  count == 0 && <Alert message="There is no data within the dates you selected." type="warning" showIcon />;

export default ScrdapdNoDataAlert;
