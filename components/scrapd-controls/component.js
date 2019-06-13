import PropTypes from 'prop-types';
import { useRef } from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import { Button, DatePicker, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RangePicker = DatePicker.RangePicker;

const ControlDiv = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '1em 0'
});

const ButtonDiv = styled.div({
  marginRight: '0.5em'
});

const success = () => {
  message.success('Copied to clipboard');
};

const download = (myRef, data, fileType) => {
  const filename = 'scrapd_data';
  const formattedText = formatData(data, fileType);

  myRef.current.setAttribute('href', `data:text/${fileType};charset=utf-8,` + encodeURIComponent(formattedText));
  myRef.current.setAttribute('download', `${filename}.${fileType}`);

  myRef.current.click();
};

const formatData = (data, fileType) => {
  return fileType === 'json' ? JSON.stringify(data) : json2csv(data);
};

const json2csv = items => {
  if (!items || items.length == 0) {
    return '';
  }
  const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
  const header = Object.keys(items[0]);
  let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
  csv.unshift(header.join(','));
  csv = csv.join('\n');
  return csv;
};

const ScrapdControls = ({ date_filter, fatalities, onChange }) => {
  const myRef = useRef(null);

  return (
    <div>
      <a ref={myRef} style={{ display: 'none' }} />
      <ControlDiv>
        <ButtonDiv>
          <RangePicker
            ranges={{
              'Last month': [
                moment()
                  .subtract(1, 'months')
                  .startOf('month'),
                moment()
                  .subtract(1, 'months')
                  .endOf('month')
              ],
              'This month': [moment().startOf('month'), moment().endOf('month')],
              "'13": [moment('2013-01-01').startOf('year'), moment('2013-01-01').endOf('year')],
              "'14": [moment('2014-01-01').startOf('year'), moment('2014-01-01').endOf('year')],
              "'15": [moment('2015-01-01').startOf('year'), moment('2015-01-01').endOf('year')],
              "'16": [moment('2016-01-01').startOf('year'), moment('2016-01-01').endOf('year')],
              "'17": [moment('2017-01-01').startOf('year'), moment('2017-01-01').endOf('year')],
              "'18": [moment('2018-01-01').startOf('year'), moment('2018-01-01').endOf('year')],
              "'19": [moment('2019-01-01').startOf('year'), moment('2019-01-01').endOf('year')],
              All: [moment('2013-01-01').startOf('year'), moment('2025-01-01').endOf('year')]
            }}
            onChange={onChange}
            defaultValue={[moment(date_filter.from_), moment(date_filter.to)]}
            format="MM/DD/YYYY"
          />
        </ButtonDiv>
        <ButtonDiv>
          <CopyToClipboard text={json2csv(fatalities)}>
            <Button type="primary" size="small" icon="copy" onClick={success}>
              CSV
            </Button>
          </CopyToClipboard>
        </ButtonDiv>
        <ButtonDiv>
          <CopyToClipboard text={JSON.stringify(fatalities)}>
            <Button size="small" icon="copy" onClick={success}>
              JSON
            </Button>
          </CopyToClipboard>
        </ButtonDiv>
        <ButtonDiv>
          <Button size="small" icon="download" onClick={() => download(myRef, fatalities, 'csv')}>
            CSV
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button size="small" icon="download" onClick={() => download(myRef, fatalities, 'json')}>
            JSON
          </Button>
        </ButtonDiv>
      </ControlDiv>
    </div>
  );
};

ScrapdControls.propTypes = {
  fetchDataAsync: PropTypes.func.isRequired,
  selectDate: PropTypes.func.isRequired,
  date_filter: PropTypes.object,
  fatalities: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default ScrapdControls;
