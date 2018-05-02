export const sessionsTypeDef = `
type User {
    id: Int!
    email: String!
    provider: String!
    name: String!
    nickname: String!
    image: String
}
input SessionInput {
    email: String!
    password: String!
}
`;

export const sessionsMutations = `
    createSession(session: SessionInput!): User!
    deleteSession(headersSession:Headers!) Success! 
`;
