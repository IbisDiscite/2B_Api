import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint} from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		validateToken: (_, { headers }) => {
			return new Promise((resolve, reject) => {
				generalRequest(`${URL}/validate_token`, 'GET', {}, true, {
					client: headers.client,
					uid: headers.uid,
					access_token: headers.token
				}).then((response) => {
					let user = response.body.data
					user['token'] = response.headers['access-token']
					user['type'] = response.headers['token-type']
					user['client'] = response.headers['client']
					delete user['provider']
					delete user['uid']
					delete user['allow_password_change']
					resolve(user)
				})
			})
		}
	},

	Mutation: {
		createSession: (_, { session }) => {
			return new Promise((resolve, reject)=>{
				generalRequest(`${URL}/sign_in`, 'POST', session, true).then(
					(response) => {
						console.log("Server response => ", response);
						let user = response.body.data
						user['token'] = response.headers['access-token']
						user['uid'] = response.headers['uid']
						user['type'] = response.headers['token-type']
						user['client'] = response.headers['client']
						resolve(user);
					}
				)
			})
		}
	}
};


export default resolvers;
