// ! are used to show that a property is required and cannot be null
// when there is ! after a list then it means the list cannot be null but if it is not after then the list can be null
// Query type is something every graphql schema needs to have and what it does is to define the entry points to and specify the return types of those endpoints
export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    
    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        addGame(game: AddGameInput): Game
        deleteGame(id:ID): [Game]
        updateGame(id: ID, edits: EditGameInput!): Game
    }

    input AddGameInput{
        title: String!
        platform: [String!]!
    }

    input EditGameInput{
        title: String
        platform: [String!]
    }
`
// a query variable is used when we want to fetch a single data and the variable is used to find the data to be fetched
// mutations referes to any change made to data