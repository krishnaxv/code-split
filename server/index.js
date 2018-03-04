import express from 'express';
import path from 'path';

import serverRenderer from './middleware/renderer';

const PORT = 3000;

// Initialize the application and create the routes
const app = express();

const router = express.Router();

// Root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);
// Add other routes
// router.use("*", serverRenderer);

// Other static resources should just be served as they are
router.use(express.static(path.resolve(__dirname, '../build')));

// Tell the app to use the above rules
app.use(router);

// Start the app
app.listen(PORT, error => {
  if (error) {
    return console.log('Something bad happened.', error);
  }

  console.log(`listening on ${PORT}...`);
});
