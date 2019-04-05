import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import facepaint from 'facepaint';
import styled from '@emotion/styled';
import { DatePicker, Table } from 'antd';
import { connect } from 'react-redux';
import { fetchDataAsync, selectDate } from '../redux/store';

const RangePicker = DatePicker.RangePicker;

// Define responsive options.
const breakpoints = [1048];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const TableDiv = styled.div(
  mq({
    display: ['none', 'block']
  })
);

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
      { title: 'Crash', dataIndex: 'Fatal crashes this year', key: 'Fatal crashes this year' },
      { title: 'Date', dataIndex: 'Date', key: 'Date' },
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
        />
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
