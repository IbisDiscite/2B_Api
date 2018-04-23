export const user_tokenTypeDef = `
type User {
    content: {
      email: String!
      password_digest: String!
    }
}

input UserInput {
    auth: String!
}
`;

export const user_tokenMutations = `
    createUser(user: UserInput!): User!
`;
