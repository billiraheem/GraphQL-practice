// ! are used to show that a property is required and cannot be null
// Query type is something every graphql schema needs to have and what it does is to define the entry points to and specify the return types of those endpoints
export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    
    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
    }
`

