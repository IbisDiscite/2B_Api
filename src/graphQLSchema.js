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

import examplesResolvers from './examples/resolvers';
import unitsResolvers from './units/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		examplesTypeDef,
		unitsTypeDef,
	],
	[
		examplesQueries,
		unitsQueries,
	],
	[
		examplesMutations,
		unitsMutations,
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		examplesResolvers,
		unitsResolvers,
	)
});
