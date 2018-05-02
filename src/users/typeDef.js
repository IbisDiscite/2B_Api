export const sessionsTypeDef = `
type User {
    id: Int!
    email: String!
}
input SessionInput {
    email: String!
    password: String!
}
`;

export const sessionsMutations = `
    createSession(session: SessionInput!): User
`;
