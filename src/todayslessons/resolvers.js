import { generalRequest, getRequestTLS } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
					//url:4002/todayslessons

const resolvers = {
	Query: {
		allTodayslessons: (_) =>
			getRequestTLS(URL, ''),
		todayslessonById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	}
};

export default resolvers;
