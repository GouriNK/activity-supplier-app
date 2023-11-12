const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const cors = require( `cors` );

const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

//Conenct to DB
connectDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Backend Server running on here port http://localhost:${port}/graphql`));


