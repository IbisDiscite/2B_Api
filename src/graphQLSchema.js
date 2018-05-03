import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	examplesMutations,
	examplesQueries,
	examplesTypeDef
} from './examples/typeDefs';

import {
	unitsMutations,
	unitsQueries,
	unitsTypeDef
} from './units/typeDefs';

import {
	todayslessonsQueries,
	todayslessonsTypeDef
} from './todayslessons/typeDefs';

import {
  authMutations,
  authTypeDef
} from './auth/typeDefs';

import {
	sessionsMutations,
	sessionQueries,
	sessionsTypeDef
} from './users/typeDefs';

import {
  messagesMutations,
  messagesQueries,
  messagesTypeDef
} from './mailer/typeDefs';

import examplesResolvers from './examples/resolvers';
import unitsResolvers from './units/resolvers';
import todayslessonsResolvers from './todayslessons/resolvers';
import sessionsResolvers from './users/resolvers';
import messagesResolvers from './mailer/resolvers';
import authResolvers from './auth/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		examplesTypeDef,
		unitsTypeDef,
		todayslessonsTypeDef,
		sessionsTypeDef,
    messagesTypeDef,
		authTypeDef
	],
	[
		examplesQueries,
		unitsQueries,
		todayslessonsQueries,
		sessionQueries,
    messagesQueries
	],
	[
		examplesMutations,
		unitsMutations,
		sessionsMutations,
    messagesMutations,
		authMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		examplesResolvers,
		unitsResolvers,
		todayslessonsResolvers,
		sessionsResolvers,
    messagesResolvers,
		authResolvers
	)
});
