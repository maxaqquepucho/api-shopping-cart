'use strict'

const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
type Query {
    hello: String
}
`)

// ejecutar el query hello

graphql(schema, '{ hello }').then( data => console.log(data))