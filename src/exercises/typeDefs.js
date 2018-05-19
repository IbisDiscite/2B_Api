export const exercisesTypeDef = `
type Exercise{
	id: Int!
	leccion: Int!
    enunciado: String!
    opc1: String! 
    opc2: String! 
    opc3: String!
    opc4: String!
    respuesta: String! 
}`;
export const exercisesQueries = `
   	allExercises: [Exercise]!
    exerciseByLeccion(leccion: Int!): [Exercise]!
    exerciseCreate:[Exercise]!
`;
