import React from "react";
import NavHeader from "../Navheader/Navheader";

const Layout = ({ children }) => {
	return (
		<div>
			<NavHeader />
			{children}
		</div>
	);
};

export default Layout;
