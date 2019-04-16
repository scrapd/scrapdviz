import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import facepaint from 'facepaint';
import styled from '@emotion/styled';
import { Button, DatePicker, message, Table } from 'antd';
import { connect } from 'react-redux';
import { fetchDataAsync, selectDate } from '../redux/store';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RangePicker = DatePicker.RangePicker;

// Define responsive options.
const breakpoints = [1048];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const ControlDiv = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '1em 0'
});

const ButtonDiv = styled.div({
  // marginLeft: '0.5em',
  marginRight: '0.5em'
});

const TableDiv = styled.div(
  mq({
    display: ['none', 'block']
  })
);

const success = () => {
  message.success('Copied to clipboard');
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

class ScrapdGrid extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      error: null,
      isLoaded: false
    };
    this.columns = [
      { title: 'Case', dataIndex: 'Case', key: 'Case' },
      {
        title: 'Crash',
        dataIndex: 'Fatal crashes this year',
        key: 'Fatal crashes this year',
        sortDirections: ['descend'],
        sorter: (a, b) => a['Fatal crashes this year'] - b['Fatal crashes this year']
      },
      {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => new moment(a.Date) - new moment(b.Date)
      },
      { title: 'Time', dataIndex: 'Time', key: 'Time' },
      { title: 'Location', dataIndex: 'Location', key: 'Location' },
      { title: 'First Name', dataIndex: 'First Name', key: 'First Name' },
      { title: 'Last Name', dataIndex: 'Last Name', key: 'Last Name' },
      { title: 'Ethnicity', dataIndex: 'Ethnicity', key: 'Ethnicity' },
      { title: 'Gender', dataIndex: 'Gender', key: 'Gender' },
      { title: 'DOB', dataIndex: 'DOB', key: 'DOB' },
      { title: 'Age', dataIndex: 'Age', key: 'Age' }
    ];
  }

  componentDidMount() {
    const dateFilter = this.props.date_filter;
    this.props.fetchDataAsync(dateFilter);
    this.props.selectDate(dateFilter);
  }

  onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    let dateFilter = { from_: dates[0], to: dates[1] };
    this.props.fetchDataAsync(dateFilter);
    this.props.selectDate(dateFilter);
  }

  render() {
    return (
      <div>
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
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last year': [
                  moment()
                    .subtract(1, 'year')
                    .startOf('year'),
                  moment()
                    .subtract(1, 'year')
                    .endOf('year')
                ],
                'This year': [moment().startOf('year'), moment().endOf('year')]
              }}
              onChange={this.onChange}
              defaultValue={[moment(this.props.date_filter.from_), moment(this.props.date_filter.to)]}
            />
          </ButtonDiv>
          <ButtonDiv>
            <CopyToClipboard text={json2csv(this.props.fatalities)}>
              <Button type="primary" size="small" icon="copy" onClick={success}>
                CSV
              </Button>
            </CopyToClipboard>
          </ButtonDiv>
          <ButtonDiv>
            <CopyToClipboard text={JSON.stringify(this.props.fatalities)}>
              <Button size="small" icon="copy" onClick={success}>
                JSON
              </Button>
            </CopyToClipboard>
          </ButtonDiv>
        </ControlDiv>
        <TableDiv>
          <Table columns={this.columns} dataSource={this.props.fatalities} />
        </TableDiv>
      </div>
    );
  }
}

ScrapdGrid.propTypes = {
  fetchDataAsync: PropTypes.func.isRequired,
  selectDate: PropTypes.func.isRequired,
  date_filter: PropTypes.object,
  fatalities: PropTypes.array
};

const mapStateToProps = state => {
  const { date_filter, fatalities } = state;
  return { date_filter, fatalities };
};

export default connect(
  mapStateToProps,
  { fetchDataAsync, selectDate }
)(ScrapdGrid);
