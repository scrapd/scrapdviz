import PropTypes from 'prop-types';
import React from 'react';
import ScrapdControls from './component';
import { connect } from 'react-redux';
import { fetchDataAsync, selectDate } from '../../redux/store';

class ScrapdControlsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
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
      <ScrapdControls
        fatalities={this.props.fatalities}
        date_filter={this.props.date_filter}
        fetchDataAsync={this.props.fetchDataAsync}
        selectDate={this.props.selectDate}
        onChange={this.onChange}
      />
    );
  }
}

ScrapdControlsContainer.propTypes = {
  date_filter: PropTypes.object.isRequired,
  fatalities: PropTypes.array.isRequired,
  fetchDataAsync: PropTypes.func.isRequired,
  selectDate: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { date_filter, fatalities } = state;
  return { date_filter, fatalities };
};

export default connect(
  mapStateToProps,
  { fetchDataAsync, selectDate }
)(ScrapdControlsContainer);
