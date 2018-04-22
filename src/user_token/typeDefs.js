export const user_tokenTypeDef = `
type User {
    id: Int!
    email: String!
    password_digest: String!
    last_login: String!
}

input UnitInput {
    email: String!
}
`;

export const user_tokenQueries = `
    allUsers: [User]!
    userById(id: Int!): User!
`;

export const user_tokenMutations = `
    createUser(user: UserInput!): User!
`;