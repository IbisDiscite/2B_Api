export const examplesTypeDef = `
type Example {
    id: Int!
    unit_id: Int!
    contenido: String!
}

input ExampleInput {
    unit_id: Int!
    contenido: String!
}
`;

export const examplesQueries = `
    allExamples: [Example]!
    exampleById(id: Int!): Example!
`;

export const examplesMutations = `
    createExample(example: ExampleInput!): Example!
    deleteExample(id: Int!): Example!
    updateExample(id: Int!, example: ExampleInput!): Example!
`;
