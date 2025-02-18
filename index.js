import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// DB
import DB from './DB.js'

// types
import { typeDefs } from './schema.js'

// has to match the query schema
// Game is used to access related data to the game object like reviews for the game, the parent will be the game()
// 'parent' refers to the parent resolver in a resolver chain
// 'args' is used to access the query variable
// 'context' is an object that can be used for spying context values across all our resolvers i.e auth
const resolvers = {
    Query: {
        games() {
            return DB.games
        },

        game(_, args) {
            return DB.games.find((game) => game.id === args.id)
        },

        authors() {
            return DB.authors
        },

        author(_, args) {
            return DB.authors.find((author) => author.id === args.id)
        },

        reviews() {
            return DB.reviews
        },

        review(_, args) {
            return DB.reviews.find((review) => review.id === args.id)
        }
    },

    Game: {
        reviews(parent) {
            return DB.reviews.filter((review) => review.game_id === parent.id)
        }
    },

    Author: {
        reviews(parent) {
            return DB.reviews.filter((review) => review.author_id === parent.id)
        }
    },

    Review: {
        author(parent) {
            return DB.authors.find((a) => a.id === parent.author_id)
        },

        game(parent) {
            return DB.games.find((g) => g.id === parent.game_id)
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