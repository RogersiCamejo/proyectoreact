import React from "react";
import AuthProvider from "./auth/context/AuthProvider";
import AppRoutes from "./routes/App.routes";
import { reduce } from "./utils/reducer";

const App = () => {
	return (
		<AuthProvider>
			<AppRoutes />
		</AuthProvider>
	);
};

export default App;
