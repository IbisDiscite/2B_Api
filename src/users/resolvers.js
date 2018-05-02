import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint} from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Mutation: {
		createSession: (_, { session }) =>
			generalRequest(`${URL}/sign_in`, 'POST', session, true).then(
				(response) => {
					let user = response.body.data
					return user
				}
			),
		deleteSession: (_, { headersSession }) => {
			return new Promise((resolve, reject) => {
				generalRequest(`${URL}/sign_out`, 'DELETE', {}, true).then(
					(response) => {
						resolve(response.body)
				}).catch((error) => {
					reject(error)
				})
			})
	}
};

export default resolvers;
