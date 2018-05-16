export const todayslessonsTypeDef = `
type Todayslesson {
    id: Int!
    name: String!
    description: String!
    unit_id: Int!
}
`;

export const todayslessonsQueries = `
    allTodayslessons: [Todayslesson]!
    todayslessonById(id: Int!): Todayslesson!
`;
