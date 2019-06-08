import PropTypes from 'prop-types';
import React from 'react';
import facepaint from 'facepaint';
import moment from 'moment';
import styled from '@emotion/styled';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { fetchDataAsync, selectDate } from '../redux/store';

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
      {
        title: 'Case',
        dataIndex: 'Case',
        key: 'Case',
        render: (text, record) => (
          <a target="_blank" rel="noopener noreferrer" href={record.Link}>
            {text}
          </a>
        )
      },
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

  onChange(dates) {
    let dateFilter = { from_: dates[0], to: dates[1] };
    this.props.fetchDataAsync(dateFilter);
    this.props.selectDate(dateFilter);
  }

  render() {
    return (
      <div>
        <TableDiv>
          <Table columns={this.columns} dataSource={this.props.fatalities} size="middle" />
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
