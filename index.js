import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// DB
import DB from './DB.js'

// types
import { typeDefs } from './schema.js'

// has to match the query schema
const resolvers = {
    Query: {
        games() {
            return DB.games
        },

        authors() {
            return DB.authors
        },

        reviews() {
            return DB.reviews
        }
    }
}

// server setup
const server = new ApolloServer({
    // typeDefs: is the description of our data types and their relationship with other data types {defs of types of data}
    typeDefs,
    // resolvers: a bunch of functions that determine how we respond to queries for differnt data on the graph
    resolvers
})


const { url } = startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)