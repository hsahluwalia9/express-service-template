const express = require('express');

const app = express();
const port = 3001 || process.env.port;

app.get('/', (req, res) => res.send('Hello World.'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening on port ${port}`));
