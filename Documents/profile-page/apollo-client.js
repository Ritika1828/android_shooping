import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "https://graph.sigma.byjusexamprep.com",
	cache: new InMemoryCache(),
	credentials: 'include',
});

export default client;
