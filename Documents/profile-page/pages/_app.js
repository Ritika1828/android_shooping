import Navbar from "../Component/Navbar";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export default function App({ Component, pageProps }) {
	return (
		<>
			<ApolloProvider client={client}>
				<Navbar />
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	);
}


