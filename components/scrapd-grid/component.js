import PropTypes from 'prop-types';
import React from 'react';
import facepaint from 'facepaint';
import moment from 'moment';
import styled from '@emotion/styled';
import { Table } from 'antd';

// Define responsive options.
const breakpoints = [1048];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const TableDiv = styled.div(
  mq({
    display: ['none', 'block'],
    marginTop: '1em'
  })
);

class ScrapdGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
    this.columns = [
      {
        title: 'Case',
        dataIndex: 'case',
        key: 'case',
        render: (text, record) => (
          <a target="_blank" rel="noopener noreferrer" href={record.Link}>
            {text}
          </a>
        )
      },
      {
        title: 'Crash',
        dataIndex: 'crash',
        key: 'crash',
        sortDirections: ['descend'],
        sorter: (a, b) => a['crash'] - b['crash']
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => new moment(a.date) - new moment(b.date)
      },
      { title: 'Time', dataIndex: 'time', key: 'time' },
      { title: 'Location', dataIndex: 'location', key: 'location' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Ethnicity', dataIndex: 'ethnicity', key: 'ethnicity' },
      { title: 'Gender', dataIndex: 'gender', key: 'gender' },
      { title: 'Age', dataIndex: 'age', key: 'age' }
    ];
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
  fatalities: PropTypes.array
};

export default ScrapdGrid;
