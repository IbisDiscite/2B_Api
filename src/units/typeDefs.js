export const unitsTypeDef = `
type Unit {
    id: Int!
    nombre: String!
}

input UnitInput {
    nombre: String!
}
`;

export const unitsQueries = `
    allUnits: [Unit]!
    unitById(id: Int!): Unit!
`;

export const unitsMutations = `
    createUnit(unit: UnitInput!): Unit!
    deleteUnit(id: Int!): Unit!
    updateUnit(id: Int!, unit: UnitInput!): Unit!
`;
