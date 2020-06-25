export const typeDefs = `
    type Contact {
        id: ID!
        firstname: String
        lastName: String
    }

    type Query {
        contacts: [Contact]
    }
`;