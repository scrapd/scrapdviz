import { Alert } from 'antd';
import Proptypes from 'prop-types';

const ScrdapdNoDataAlert = ({ count }) =>
  count == 0 && (
    <Alert
      message="There is no data within the dates you selected. Adjust the dates in the date picker above."
      type="warning"
      showIcon
    />
  );

ScrdapdNoDataAlert.propTypes = {
  count: Proptypes.number
};

export default ScrdapdNoDataAlert;
