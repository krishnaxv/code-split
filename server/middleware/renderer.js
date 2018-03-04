import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

// Import main App component
import App from '../../src/App';

export default (request, response, next) => {
  // Point to the HTML file created by CRA's build tool
  const filePath = path.resolve(__dirname, '../../build/index.html');
  fs.readFile(filePath, 'utf8', (error, HTMLData) => {
    if (error) {
      console.error('Error', error);
      return res.status(404).end();
    }
    // Render the app as a string
    const HTML = ReactDOMServer.renderToString(
      <StaticRouter location={request.baseUrl} context={{}}>
        <App />
      </StaticRouter>
    );
    // Inject the rendered app into our HTML and send it
    return response.send(
      HTMLData.replace('<div id="root"></div>', `<div id="root">${HTML}</div>`)
    );
  });
};
