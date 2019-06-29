import { Alert } from 'antd';

const ScrdapdNoDataAlert = ({ count }) =>
  count == 0 && (
    <Alert
      message="There is no data within the dates you selected. Adjust the dates in the date picker above."
      type="warning"
      showIcon
    />
  );

export default ScrdapdNoDataAlert;
