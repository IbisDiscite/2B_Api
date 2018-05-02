import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint, entryPoint1 } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL1 = `http://${url}:${port}/${entryPoint1}`;

const resolvers = {
	Mutation: {
		createSession: (_, { session }) =>
			generalRequest(`${URL}/sign_in`, 'POST', session, true).then((response) => {
				let user = response.body.data
				user['token'] = response.headers['access-token']
				user['type'] = response.headers['token-type']
				user['client'] = response.headers['client']
				return user
			}),
		deleteSession: (_, { headersSession }) => {
			return new Promise((resolve, reject) => {
				generalRequest(`${URL}/sign_out`, 'DELETE', {}, true, {
					client : headersSession.client,
					uid : headersSession.uid,
					access_token: headersSession.token
				}).then((response) => {
					resolve(response.body)
				}).catch((error) => {
					reject(error)
				})
			})
		}
	}
};

export default resolvers;