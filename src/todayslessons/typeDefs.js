export const todayslessonsTypeDef = `
type Todayslesson {
    id: Int!
    name: String!
    description: String!
}
`;

export const todayslessonsQueries = `
    AllTodayslessons: [Todayslesson]!
    TodayslessonById(id: Int!): Todayslesson!
`;
