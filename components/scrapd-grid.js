import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { DatePicker, Table } from 'antd';
import { connect } from 'react-redux';
import { fetchDataAsync } from '../redux/store';

const RangePicker = DatePicker.RangePicker;

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

  onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    let dateFilter = { from_: dates[0], to: dates[1] };
    this.props.fetchDataAsync(dateFilter);
  }

  render() {
    return (
      <div>
        <RangePicker
          ranges={{
            'Previous month': [
              moment()
                .subtract(1, 'months')
                .startOf('month'),
              moment()
                .subtract(1, 'months')
                .endOf('month')
            ],
            'This Month': [moment().startOf('month'), moment().endOf('month')]
          }}
          onChange={this.onChange}
        />
        <div>Number of fatalities for this period: {this.props.fatalities.length}</div>
        <Table columns={this.columns} dataSource={this.props.fatalities} />
      </div>
    );
  }
}

ScrapdGrid.propTypes = {
  fetchDataAsync: PropTypes.func.isRequired,
  fatalities: PropTypes.array
};

const mapStateToProps = state => {
  const { date_filter, fatalities } = state;
  return { date_filter, fatalities };
};

export default connect(
  mapStateToProps,
  { fetchDataAsync }
)(ScrapdGrid);
