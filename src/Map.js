import React, { Component } from 'react';
import MapboxGL from 'mapbox-gl/dist/mapbox-gl.js';

const style = {
  width: '100%',
  height: '720px'
};

MapboxGL.accessToken =
  'pk.eyJ1Ijoia3Jpc2huYXh2IiwiYSI6ImNqODh2ejViaTFuYTIzM3IzcHF2b3ZmY2YifQ._QRQPfgyz3tQp1Fap-0LBg';

class Map extends Component {
  componentDidMount() {
    this.injectCSS();

    this.createMap();
  }

  injectCSS() {
    const mapCSS = document.createElement('link');
    mapCSS.setAttribute('rel', 'stylesheet');
    mapCSS.setAttribute(
      'href',
      'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css'
    );
    document.querySelector('head').appendChild(mapCSS);
  }

  createMap() {
    const map = new MapboxGL.Map({
      container: this.map,
      style: 'mapbox://styles/mapbox/light-v9'
    });
  }

  render() {
    return (
      <div
        style={style}
        ref={map => {
          this.map = map;
        }}
      />
    );
  }
}

export default Map;
