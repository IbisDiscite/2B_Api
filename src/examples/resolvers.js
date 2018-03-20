import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allExamples: (_) =>
			getRequest(URL, ''),
		exampleById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createExample: (_, { example }) =>
			generalRequest(`${URL}`, 'POST', example),
		updateExample: (_, { id, example }) =>
			generalRequest(`${URL}/${id}`, 'PUT', example),
		deleteExample: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
