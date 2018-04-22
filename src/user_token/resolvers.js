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
			generalRequest(`${URL}`, 'POST', unit)
	}
};

export default resolvers;