import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint} from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Mutation: {
		createSession: (_, { session }) =>
			generalRequest(`${URL}/sign_in`, 'POST', session, true).then(
				(response) => {
					let user = response.body.data
					user['token'] = response.headers['access-token']
					user['type'] = response.headers['token-type']
					user['client'] = response.headers['client']
					return user
				}
			),
	}
};

export default resolvers;
