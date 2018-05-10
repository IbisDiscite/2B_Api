import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allExercises: (_) =>
			getRequest(URL, ''),
		exerciseByLeccion: (_, { leccion }) =>
			generalRequest(`${URL}/leccion/${leccion}`, 'GET'),
		exerciseCreate: (_) =>
			generalRequest(`${URL}/create`, 'GET'),	
	},
	
};

export default resolvers;
