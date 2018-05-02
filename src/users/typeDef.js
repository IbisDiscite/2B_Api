export const sessionsTypeDef = `
type User {
    id: Int!
    email: String!
    provider: String!
    name: String!
    nickname: String!
    image: String
}

type Data {
    data: User! 
}
type Success{
    success: String! 
}
input SessionInput {
    email: String!
    password: String!
}
input Headers {
    uid: String!
    token: String!
    client: String!
}
`;

export const sessionsMutations = `
    deleteSession(headersSession: Headers!): Success!
`;