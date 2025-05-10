
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use('/api', require('./routes/metrics'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
