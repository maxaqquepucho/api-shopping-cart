'use strict'

if (process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
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
const isDev = process.env.NODE_ENV !== 'production'

const typeDefs = readFileSync(
  join(__dirname, 'src', 'graphql', 'schema.graphql'),
  'utf-8'
)

app.use(cors())

// definiendo el esquema
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use('/graphql', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(port, () => console.log('El servidor esta escuchando en http://localhost:' + port))
