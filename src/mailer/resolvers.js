import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allMessages: (_) =>
			getRequest(URL, ''),
		messageById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createMessage: (_, { example }) =>
			generalRequest(`${URL}`, 'POST', message),
		updateMessage: (_, { id, example }) =>
			generalRequest(`${URL}/${id}`, 'PUT', message),
		deleteMessage: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
