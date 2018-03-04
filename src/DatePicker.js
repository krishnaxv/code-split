import React from 'react';
import { default as ReactDatePicker } from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class DatePicker extends React.Component {
  state = {
    startDate: moment()
  };

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <ReactDatePicker
        selected={this.state.startDate}
        onChange={date => this.handleChange(date)}
      />
    );
  }
}

export default DatePicker;
