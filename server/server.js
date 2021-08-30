require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();

const server = require("http").createServer(app);

app.use(express.json({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


// routes
app.use('/api/reports', require('./routes/reports'));



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));