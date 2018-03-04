import React, { Component } from 'react';
import 'intersection-observer';

class Page3 extends Component {
  state = {
    datePicker: null,
    map: null
  };

  componentDidMount() {
    import('./DatePicker').then(module =>
      this.setState({
        datePicker: module.default
      })
    );

    var io = new IntersectionObserver(entryList => {
      entryList.forEach(entry => {
        if (entry.isIntersecting) {
          import('./Map').then(module => {
            this.setState({
              map: module.default
            });
          });
        }
      });
    }, {});

    // Start observing an element
    io.observe(document.querySelector('#map-wrapper'));
  }
  render() {
    const { datePicker: DatePicker, map: Map } = this.state;
    return (
      <div>
        <p style={{ marginBottom: '720px' }}>Page 3</p>
        {DatePicker ? <DatePicker /> : null}
        <div id="map-wrapper" style={{ minHeight: '200px' }}>
          {Map ? <Map /> : null}
        </div>
      </div>
    );
  }
}

export default Page3;
