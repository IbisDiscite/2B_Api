export const todayslessonsTypeDef = `
type Todayslesson {
    id: Int!
    name: String!
    description: String!
}
`;

export const todayslessonsQueries = `
    allTodayslessons: [Todayslesson]!
    todayslessonById(id: Int!): Todayslesson!
`;
