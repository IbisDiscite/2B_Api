export const user_tokenTypeDef = `
type User {
    id: Int!
    email: String!
    password_digest: String!
    last_login: String!
}

input UserInput {
  auth: String!
}
`;

export const user_tokenMutations = `
    createUser(user: UserInput!): User!
`;
