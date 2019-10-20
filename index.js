'use strict'

require('dotenv').config()
const express = require('express')
const { makeExecutableSchema } = require('graphql-tools')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./src/graphql/resolvers')
const { sequelize } = require('./src/db')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

// ----------------------------------------------------------
const app = express()
const port = process.env.PORT || 5000

const typeDefs = readFileSync(
  join(__dirname, 'src', 'graphql', 'schema.graphql'),
  'utf-8'
)

// definiendo el esquema
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use('/api', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => console.log('El servidor esta escuchando en http://localhost:' + port))
