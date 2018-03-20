import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUnits: (_) =>
			getRequest(URL, ''),
		unitById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createUnit: (_, { unit }) =>
			generalRequest(`${URL}`, 'POST', unit),
		updateUnit: (_, { id, unit }) =>
			generalRequest(`${URL}/${id}`, 'PUT', unit),
		deleteUnit: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
