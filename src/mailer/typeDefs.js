export const messagesTypeDef = `
type Message {
    id: Int!
    subject: String!
    text: String!
}

input MessageInput {
    subject: String!
    text: String!
}
`;

export const messagesQueries = `
    allMessages: [Message]!
    messageById(id: Int!): Message!
`;

export const messagesMutations = `
    createMessage(message: MessageInput!): Message!
    deleteMessage(id: Int!): Message!
    updateMessage(id: Int!, message: MessageInput!): Message!
`;
