import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint} from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Mutation: {
		createSession: (_, { session }) =>
			generalRequest(`${URL}/sign_in`, 'POST', session).then(
				(response) => {
					let user = response.body.data
					return user
				}
			)
	}
};

export default resolvers;
